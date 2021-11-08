import { formatPrice, applyDiscount } from '../../utils/priceUtils';
import { Locale } from '../../types';

describe('[Util] priceUtils', () => {
  describe('[Function] formatPrice', () => {
    test('Price is formatted for Colombia currency when parameter locale is Colombia', () => {
      const price = 120000;
      expect(formatPrice(price, Locale.Colombia)).toEqual('$120.000 COP');
    });

    test('Price is formatted for USA currency when parameter locale is Global', () => {
      const price = 1000;
      expect(formatPrice(price, Locale.Global)).toEqual('$1,000 USD');
    });

    test('Render empty string when the price is negative or zero', () => {
      const price = 0;
      expect(formatPrice(price, Locale.Global)).toBe('');
    });
  });

  describe('[Function] applyDiscount', () => {
    test('Apply correct discount to price for discounts between 0 and 100', () => {
      expect(applyDiscount(10, 145000)).toEqual(130500);
    });

    test('If discount is out of range between i and 100, return price without discount', () => {
      expect(applyDiscount(-15, 145000)).toEqual(145000);
      expect(applyDiscount(0, 145000)).toEqual(145000);
      expect(applyDiscount(115, 145000)).toEqual(145000);
    });
  });
});
