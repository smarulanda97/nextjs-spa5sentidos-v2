import { ServicesHome } from '@components/index';
import { GET_SERVICES_HOME } from '@components/queries';
import { GetServerSidePropsContext, NextPage } from 'next';
import { addApolloState, initializeApollo } from '@lib/apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <ServicesHome />
      </main>
    </div>
  );
};

export const getServerSideProps: any = async ({
  locale,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_SERVICES_HOME,
    variables: {
      locale,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  });
};

export default Home;
