import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { ServicesList } from '../../index';
import { GET_DATA_SERVICES_ALL_COMPONENT } from '../../../queries';

import styles from './ServicesAll.module.scss';

const ServicesAll: React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const { loading, error, data } = useQuery(GET_DATA_SERVICES_ALL_COMPONENT, {
    variables: { locale },
  });

  return (
    <section className={styles.container}>
      <Container>
        <h1
          className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-md-1`}
        >
          {t('all_our_services')}
        </h1>
        <ServicesList loading={loading} data={data} error={error} />
      </Container>
    </section>
  );
};

export default ServicesAll;
