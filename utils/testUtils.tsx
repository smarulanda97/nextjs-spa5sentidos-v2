import 'cross-fetch/polyfill';
import { NextRouter } from 'next/router';
import { mockRouter } from '@mocks/next';
import { createApolloClient } from '@lib/apollo/client';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { AppConfigProvider } from '@context/AppConfig/AppConfigContext';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { render as defaultRender, RenderResult } from '@testing-library/react';

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

/**
 * Init apollo client
 */
const client: ApolloClient<any> = createApolloClient();

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
        <ApolloProvider client={client}>
          <AppConfigProvider>{children}</AppConfigProvider>
        </ApolloProvider>
      </RouterContext.Provider>
    );
  }

  return defaultRender(ui, { wrapper, ...options });
}

export * from '@testing-library/react';
