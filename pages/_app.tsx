import type { AppProps } from 'next/app';
import { useApollo } from '@lib/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';

import '@styles/scss/index.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default appWithTranslation(App);
