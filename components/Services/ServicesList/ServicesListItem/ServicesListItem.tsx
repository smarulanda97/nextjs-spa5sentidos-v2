import Image from 'next/image';
import React, { memo } from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { asset, trimAllSpaces } from '@utils/index';
import { Link, Offer, Price } from '@components/index';
import { ButtonColors, Service } from '@types-app/index';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

import styles from './ServicesListItem.module.scss';

type Props = {
  service: Service;
};

const ServicesListItem: React.FC<Props> = ({ service }) => {
  const { price, discount } = service;
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
          layout={'responsive'}
          width={thumbnail.width}
          height={thumbnail.height}
          src={asset(thumbnail.url)}
          alt={`${service.title} service`}
        />
        <div className={styles.description}>
          <h3 data-testid={'service-title'}>
            {service.title}
            <Offer discount={discount} />
          </h3>
          <p role={'paragraph'}>
            {service.summary.slice(0, 150)}
            {service.summary.length > 150 && ' ...'}
          </p>
        </div>
      </div>
      <Price price={price} discount={discount} />
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
