import { useRouter } from 'next/router';
import { FC, ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import styles from './ServicesHome.module.scss';
import { ServicesList } from '@components/index';
import { GET_DATA_SERVICES_HOME_COMPONENT } from '@queries/index';

const ServicesHome: FC = (): ReactElement => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const { loading, error, data } = useQuery(GET_DATA_SERVICES_HOME_COMPONENT, {
    variables: { locale },
  });

  return (
    <section className={styles.container}>
      <Container>
        <h2
          className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-4`}
        >
          {t('popular_services')}
        </h2>
        <ServicesList loading={loading} data={data} error={error} />
      </Container>
    </section>
  );
};

export default ServicesHome;
