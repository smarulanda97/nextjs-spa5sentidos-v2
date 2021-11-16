import 'cross-fetch/polyfill';
import React from 'react';
import { NextRouter } from 'next/router';
import { mockRouter } from '@mocks/next';
import { createApolloClient } from '@lib/apollo/client';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { render as defaultRender, RenderResult } from '@testing-library/react';

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

/**
 * Init apollo client
 */
const client: ApolloClient<any> = createApolloClient();

export const RouterContext = React.createContext<NextRouter>(null as any);

if (process.env.NODE_ENV !== 'production') {
  RouterContext.displayName = 'RouterContext';
}

/**
 * Overriding default render method
 */
export function render(
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {}
): RenderResult {
  if (!wrapper) {
    wrapper = ({ children }: { children: React.ReactElement }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </RouterContext.Provider>
    );
  }

  return defaultRender(ui, { wrapper, ...options });
}

export * from '@mocks/react-device-detect';
export * from '@testing-library/react';
