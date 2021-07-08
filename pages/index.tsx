import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { addApolloState, initializeApollo } from '@lib/apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  App,
  VideoBlock,
  InstagramFeed,
  ServicesHome,
} from '@components/index';
import {
  GET_DATA_LAYOUT_COMPONENT,
  GET_DATA_SERVICES_HOME_COMPONENT,
  GET_DATA_VIDEO_BLOCK_COMPONENT,
  GET_DATA_APP_CONFIG_CONTEXT,
} from '@queries/index';

const Home: NextPage = () => {
  return (
    <App layout={true}>
      <ServicesHome />
      <VideoBlock />
      <InstagramFeed />
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
      query: GET_DATA_APP_CONFIG_CONTEXT,
    }),
    apolloClient.query({
      variables,
      query: GET_DATA_LAYOUT_COMPONENT,
    }),
    apolloClient.query({
      variables,
      query: GET_DATA_SERVICES_HOME_COMPONENT,
    }),
    apolloClient.query({
      variables,
      query: GET_DATA_VIDEO_BLOCK_COMPONENT,
    }),
  ]);

  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Home;
