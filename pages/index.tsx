import React from 'react';
import { App } from '@components/index';
import absoluteUrl from 'next-absolute-url';
import { PageProps } from '@types-app/index';
import { GetServerSidePropsContext, NextPage } from 'next';
import { addApolloState, initializeApollo } from '@lib/apollo/client';
import { queriesForPage, renderPageComponents } from '@utils/pageUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage<PageProps> = (props) => {
  return (
    <App layout={true} url={props.url}>
      {renderPageComponents('indexPage')}
    </App>
  );
};

export const getServerSideProps: any = async ({
  req,
  locale,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  await queriesForPage('indexPage', apolloClient, locale);

  return addApolloState(apolloClient, {
    props: {
      url: absoluteUrl(req),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Home;
