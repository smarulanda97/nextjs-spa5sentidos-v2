import { NextRouter } from 'next/router';

/**
 * Mocking next/image
 */
jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

/**
 * Mocking next/link
 */
jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
);

/**
 * Mocking next-i18next
 */
jest.mock('next-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      isPreview: false,
      isReady: false,
      isLocaleDomain: true,
      locale: 'en',
      basePath: '/',
      pathname: '/',
      route: '/',
      asPath: '',
      query: {},
    };
  },
  withRouter(component) {
    return component;
  },
}));
/**
 * Mocking next/router
 */
export const mockRouter: NextRouter = {
  isPreview: false,
  isReady: false,
  isLocaleDomain: true,
  locale: 'en',
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
