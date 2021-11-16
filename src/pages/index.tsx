import absoluteUrl from 'next-absolute-url';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSidePropsContext, GetServerSideProps, NextPage } from 'next';

import { App } from '@components/index';
import { PageProps } from '@types-app/index';
import { queriesForPage, renderPageComponents } from '@utils/index';
import { addApolloState, initializeApollo } from '@lib/apollo/client';

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
