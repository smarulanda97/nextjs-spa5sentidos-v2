import React from 'react';
import { NextRouter } from 'next/router';

/**
 * Mocking next/image
 */
jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

/**
 * Mocking next/link
 */
jest.mock('next/link', () => ({ children }) => children);

/**
 * Mocking next-i18next
 */
jest.mock('next-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    };
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
