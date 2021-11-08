import { App } from '../components';
import absoluteUrl from 'next-absolute-url';
import { PageProps } from '../types';
import { queriesForPage, renderPageComponents } from '../utils';
import { addApolloState, initializeApollo } from '../lib/apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';

const Services: NextPage<PageProps> = (props) => {
  return (
    <App url={props.url} layout={true}>
      {renderPageComponents('servicesPage')}
    </App>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  await queriesForPage('servicesPage', apolloClient, locale);

  return addApolloState(apolloClient, {
    props: {
      url: absoluteUrl(req),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Services;
