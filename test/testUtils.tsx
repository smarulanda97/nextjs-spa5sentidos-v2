import React from 'react';
import 'cross-fetch/polyfill';
import { render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@lib/apollo/client';

// Isolate Apollo client so it could be reused
// in both application runtime and tests.
const client = createApolloClient();

const Providers = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';

// Override render method
export { customRender as render };
