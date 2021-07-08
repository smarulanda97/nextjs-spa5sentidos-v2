import React from 'react';
import { App, ServicesHome } from '@components/index';
import { GetServerSidePropsContext, NextPage } from 'next';
import { addApolloState, initializeApollo } from '@lib/apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  GET_DATA_LAYOUT_COMPONENT,
  GET_DATA_SERVICES_HOME_COMPONENT,
  GET_DATA_APP_CONFIG_CONTEXT,
} from '@queries/index';

const Services: NextPage = () => {
  return (
    <App layout={true}>
      <ServicesHome />
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
  ]);

  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Services;
