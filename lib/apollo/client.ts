import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloCient;

function createIsomorphicLink() {
  return new HttpLink({
    uri: 'http://localhost:1337/graphql',
    credentials: 'same-origin'
  })
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window !== 'undefined',
    link: createIsomorphicLink(),
    cache: new InMemoryCache()
  })
}

export function InitializeApollo(initialState = null) {
  const _apolloClient = apolloCient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window !== 'undefined') {
    return _apolloClient;
  }

  if (!apolloCient) {
    apolloCient = _apolloClient;
  }

  return apolloCient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => InitializeApollo(state), [state]);
  return store;
}