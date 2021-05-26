import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { addApolloState, initializeApollo } from '@lib/apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GET_APP_CONFIG } from '@context/AppConfig/AppConfigContext.queries';
import {
  App,
  VideoBlock,
  InstagramFeed,
  ServicesHome,
} from '@components/index';
import {
  GET_SERVICES_HOME,
  GET_LAYOUT_DATA,
  GET_VIDEO_BLOCK_DATA,
} from '@components/queries';

const Home: NextPage = () => {
  return (
    <App layout={true}>
      <React.Fragment>
        <ServicesHome />
        <VideoBlock />
        <InstagramFeed />
      </React.Fragment>
    </App>
  );
};

export const getServerSideProps: any = async ({
  locale,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  const variables = { locale };

  await Promise.all([
    apolloClient.query({
      variables,
      query: GET_APP_CONFIG,
    }),
    apolloClient.query({
      variables,
      query: GET_LAYOUT_DATA,
    }),
    apolloClient.query({
      variables,
      query: GET_SERVICES_HOME,
    }),
    apolloClient.query({
      variables,
      query: GET_VIDEO_BLOCK_DATA,
    }),
  ]);

  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Home;
