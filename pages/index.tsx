import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { App, InstagramFeed, ServicesHome } from '@components/index';
import { addApolloState, initializeApollo } from '@lib/apollo/client';
import { GET_SERVICES_HOME, GET_LAYOUT_DATA } from '@components/queries';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GET_APP_CONFIG } from '@context/AppConfig/AppConfigContext.queries';

const Home: NextPage = () => {
  return (
    <App layout={true}>
      <React.Fragment>
        <ServicesHome />
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
  ]);

  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Home;
