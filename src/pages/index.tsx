import { App } from '../components';
import absoluteUrl from 'next-absolute-url';
import { PageProps } from '../types';
import { addApolloState, initializeApollo } from '../lib/apollo/client';
import { queriesForPage, renderPageComponents } from '../utils/pageUtils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSidePropsContext, GetServerSideProps, NextPage } from 'next';

const Home: NextPage<PageProps> = (props) => {
  return (
    <App layout={true} url={props.url}>
      {renderPageComponents('indexPage')}
    </App>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
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
