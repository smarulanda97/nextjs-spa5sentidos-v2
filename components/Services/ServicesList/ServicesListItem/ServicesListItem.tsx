import { memo } from 'react';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { Link } from '@components/index';
import { useTranslation } from 'next-i18next';
import { ButtonColors } from '@types-app/index';
import { asset, trimAllSpaces } from '@utils/index';
import styles from './ServicesListItem.module.scss';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

const ServicesListItem = ({ service }) => {
  const { thumbnail } = service.images;
  const { t } = useTranslation('common');
  const {
    system: { phone_number: phoneNumber },
  } = useAppConfig();

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
        <Link
          target={'_blank'}
          text={t('book_massage')}
          color={ButtonColors.primary}
          href={`https://api.whatsapp.com/send?phone=${trimAllSpaces(
            phoneNumber
          )}&text=${t('im_interested_in', { massage: service.title })}`}
        />
        <Link text={t('learn_more')} color={ButtonColors.secondary} />
      </div>
    </Col>
  );
};

export default memo(ServicesListItem);
