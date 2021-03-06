import React from 'react';
import { useRouter } from 'next/router';
import styles from './Price.module.scss';
import { Locale } from '@types-app/global';
import { applyDiscount, formatPrice } from '@utils/priceUtils';

type Props = {
  price: number;
  discount: number;
};

const Price: React.FC<Props> = (props) => {
  const { locale } = useRouter();
  const { price, discount } = props;
  const hasDiscount = discount > 0;
  const localePrice = locale === 'es' ? Locale.Colombia : Locale.Global;

  return (
    <div className={styles.container}>
      {price && (
        <div>
          <span
            className={`${styles.price} ${
              hasDiscount ? styles.withDiscount : ''
            }`}
            data-testid={'service-list-item-price'}
          >
            {formatPrice(price, localePrice)}
          </span>
        </div>
      )}
      {hasDiscount && (
        <div>
          <span
            className={styles.bestPrice}
            data-testid={'service-list-item-price'}
          >
            {formatPrice(applyDiscount(discount, price), localePrice)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Price;
