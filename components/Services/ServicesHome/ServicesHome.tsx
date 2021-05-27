import { useRouter } from 'next/router';
import { FC, ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'next-i18next';
import { Col, Container, Row } from 'react-bootstrap';

import { ButtonColors } from '@types-app/index';
import { Link, ServicesList } from '@components/index';
import { GET_DATA_SERVICES_HOME_COMPONENT } from '@components/queries';

const ServicesHome: FC = (): ReactElement => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const { loading, error, data } = useQuery(GET_DATA_SERVICES_HOME_COMPONENT, {
    variables: { locale },
  });

  return (
    <section className="my-5">
      <Container>
        <h2
          className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-4`}
        >
          {t('popular_services')}
        </h2>
        <ServicesList loading={loading} data={data} error={error} />
        <Row>
          <Col className={'text-center pt-4'}>
            {/*<Link*/}
            {/*  href={'/services'}*/}
            {/*  color={ButtonColors.primary}*/}
            {/*  text={t('other_services')}*/}
            {/*  className={'w-sm-100'}*/}
            {/*/>*/}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHome;
