import { memo } from 'react';
import Image from 'next/image';
import { asset } from '@utils/index';
import { Col } from 'react-bootstrap';
import { Link } from '@components/index';
import { useTranslation } from 'next-i18next';
import { ButtonColors } from '@types-app/index';
import styles from './ServicesListItem.module.scss';

const ServicesListItem = ({ service }) => {
  const { thumbnail } = service.images;
  const { t } = useTranslation('common');

  return (
    <Col sm={6} lg={3} className={styles.container}>
      <div>
        <Image
          quality={85}
          width={thumbnail.width}
          height={thumbnail.height}
          src={asset(thumbnail.url)}
          layout={'responsive'}
          alt={`${service.title} service`}
        />
        <div className={styles.description}>
          <h3 data-testid={'service-title'}>{service.title}</h3>
          <p>
            {service.summary.slice(0, 180)}
            {service.summary.length > 180 && ' ...'}
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Link text={t('book_massage')} color={ButtonColors.primary} />
        <Link text={t('learn_more')} color={ButtonColors.secondary} />
      </div>
    </Col>
  );
};

export default memo(ServicesListItem);
