import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { Url } from '@types-app/index';
import { Layout } from '@components/index';
import { MetaTagsProcessor } from '@utils/index';
import { GET_DATA_APP_COMPONENT } from '@queries/index';

interface Props {
  url: Url;
  layout: boolean;
  children?: JSX.Element | JSX.Element[];
}

const App: React.FC<Props> = (props) => {
  const { layout, children, url } = props;
  const { locale, asPath, pathname, route } = useRouter();
  const location = {
    url,
    route,
    asPath,
    locale,
    pathname,
  };
  const { error, data, loading } = useQuery(GET_DATA_APP_COMPONENT, {
    variables: {
      locale,
    },
  });

  const metaTags =
    !error && !loading && url
      ? new MetaTagsProcessor(location, data.metatags).getObjectNextSEO()
      : {};

  return (
    <React.Fragment>
      {!error && !loading ? <NextSeo {...metaTags} /> : null}
      <div className={'app'} id={'app'}>
        {layout ? <Layout>{children}</Layout> : children}
      </div>
    </React.Fragment>
  );
};

export default React.memo(App);
