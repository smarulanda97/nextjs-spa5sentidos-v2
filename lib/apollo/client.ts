import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

function createIsomorphicLink(): HttpLink {
  return new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'same-origin',
  });
}

export function createApolloClient(): ApolloClient<any> {
  return new ApolloClient({
    ssrMode: typeof window !== 'undefined',
    link: createIsomorphicLink(),
    cache: new InMemoryCache(),
  });
}

export function InitializeApollo(initialState = null): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  if (typeof window !== 'undefined') {
    return _apolloClient;
  }
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return apolloClient;
}

export function addApolloState(client: ApolloClient<any>, pageProps): any {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  return useMemo(() => InitializeApollo(state), [state]);
}
