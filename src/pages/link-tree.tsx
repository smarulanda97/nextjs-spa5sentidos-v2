import absoluteUrl from 'next-absolute-url';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import { App } from '@components/index';
import { PageProps } from '@types-app/index';
import { queriesForPage, renderPageComponents } from '@utils/index';
import { addApolloState, initializeApollo } from '@lib/apollo/client';

const LinkTree: NextPage<PageProps> = (props) => {
  return (
    <App layout={false} url={props.url}>
      {renderPageComponents('linkTreePage')}
    </App>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  await queriesForPage('linkTreePage', apolloClient, locale);

  return addApolloState(apolloClient, {
    props: {
      url: absoluteUrl(req),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default LinkTree;
