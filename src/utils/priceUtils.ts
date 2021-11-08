import { Locale, Currency } from '../types';

export function formatPrice(price: number, locale: Locale): string {
  if (price <= 0) {
    return '';
  }

  const currenciesMap = {
    [Locale.Colombia]: Currency.Colombia,
    [Locale.Global]: Currency.Global,
  };

  const options = {
    currency: currenciesMap[locale],
    style: 'currency',
    minimumFractionDigits: 0,
  };

  const priceFormatted = new Intl.NumberFormat(locale, options).format(price);

  return `${priceFormatted.replace(/\s+/g, '')} ${currenciesMap[locale]}`;
}

export function applyDiscount(discount: number, price: number): number {
  if (discount <= 0 || discount > 100) {
    return price;
  }

  discount = 100 - discount;
  discount = discount / 100;

  return price * discount;
}
