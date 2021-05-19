import { memo } from 'react';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

import { asset } from '@utils/index';
import { Link } from '@components/index';
import { useTranslation } from 'next-i18next';
import { ButtonColors } from '@types-app/index';
import styles from './ServicesListItem.module.scss';

const ServicesListItem = ({ service }) => {
  const { thumbnail } = service.images;
  const { t } = useTranslation('common');

  return (
    <Col sm={6} lg={3} className={styles.service}>
      <Image
        quality={85}
        width={thumbnail.width}
        height={thumbnail.height}
        src={asset(thumbnail.url)}
        alt={`${service.title} service`}
      />
      <div>
        <h3
          className="text-capitalize text-dark mt-3 mb-2"
          data-testid={'service-title'}
        >
          {service.title}
        </h3>
        <p>
          {service.summary.slice(0, 180)}
          {service.summary.length > 180 && ' ...'}
        </p>
        <div className={styles.serviceButtons}>
          <Link text={t('book_massage')} color={ButtonColors.primary} />
          <Link text={t('learn_more')} color={ButtonColors.secondary} />
        </div>
      </div>
    </Col>
  );
};

export default memo(ServicesListItem);
