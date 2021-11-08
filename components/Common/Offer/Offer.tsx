import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './Offer.module.scss';

type Props = {
  discount: number;
};

const Offer: React.FC<Props> = (props) => {
  const { discount } = props;
  const hasDiscount = discount > 0;
  const { t } = useTranslation('common');

  return hasDiscount ? (
    <span className={styles.offer}>
      {t('with_discount', { discount: discount })}
    </span>
  ) : null;
};

export default Offer;
