import { useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';

import { ServicesList, Link } from '@components/index';
import { GET_SERVICES_HOME } from '@components/queries';

const ServicesHome: React.FC = (): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_SERVICES_HOME);

  return (
    <div>
      <section className="services-beautysls my-5" id="services">
        <Container>
          <h2
            className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-4`}
          >
            {'Popular services'}
          </h2>
          <ServicesList loading={loading} data={data} error={error} />
          <Row>
            <Col className={'text-center pt-4'}>
              <Link
                href={'/services'}
                color={'primary'}
                text={'Other services'}
                className={'w-sm-100'}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServicesHome;
