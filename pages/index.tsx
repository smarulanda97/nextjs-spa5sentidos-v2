import { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ServicesHome } from '@components/index';

const Home: NextPage = () => {
  return (
    <div className={''}>
      <main className={'bg-primary'}>
        <ServicesHome />
      </main>
    </div>
  );
};

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default Home;
