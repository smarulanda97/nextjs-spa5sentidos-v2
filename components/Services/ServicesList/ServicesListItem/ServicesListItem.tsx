import { memo } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

import { asset } from '@utils/index';
import { Link } from '@components/index';

const ServicesListItem = ({ service }) => {
  // const { lang } = useTranslation();
  // const { title, summary } = translatableProperties(service, lang, ['title', 'summary']);

  return (
    <Col
      sm={6}
      lg={3}
      className={'serviceListItem'}
      data-testid={'services-item'}
    >
      <Row>
        <Col xs={12} className={`text-center`}>
          <Image
            width={300}
            height={200}
            quality={85}
            alt={`${service.title_en} service`}
            src={asset(service.images.featured.url)}
          />
          <h3 className="text-capitalize text-dark mt-3 mb-2">
            {service.title_en}
          </h3>
          <p>
            {service.summary_en.slice(0, 250)}
            {service.summary_en.length > 250 && '...'}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={`text-center my-3 ${'serviceListItemButtons'}`}>
          <Link text={'Book a massage'} color={'primary'} />
          <Link text={'Learn more'} color={'secondary'} />
        </Col>
      </Row>
    </Col>
  );
};

export default memo(ServicesListItem);
