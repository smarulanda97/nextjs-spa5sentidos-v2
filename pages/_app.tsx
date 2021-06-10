import type { AppProps } from 'next/app';
import { useApollo } from '@lib/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { AppConfigProvider } from '@context/AppConfig/AppConfigContext';

import '@styles/scss/index.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AppConfigProvider>
        <Component {...pageProps} />
      </AppConfigProvider>
    </ApolloProvider>
  );
}

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('@mocks/msw/index');
}

export default appWithTranslation(App);
