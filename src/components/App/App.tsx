import React from 'react';
import { NextSeo } from 'next-seo';
import { Url } from '../../types';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout } from '../index';
import { MetatagsProcessor } from '../../utils';
import { GET_DATA_APP_COMPONENT } from '../../queries';

interface Props {
  url: Url;
  layout: boolean;
  children?: JSX.Element | JSX.Element[];
}

const App: React.FC<Props> = (props) => {
  const { locale, pathname } = useRouter();
  const { layout, children } = props;
  const { error, data, loading } = useQuery(GET_DATA_APP_COMPONENT, {
    variables: {
      locale,
    },
  });

  const metatags =
    !error && !loading
      ? new MetatagsProcessor(data.metatags, pathname).getObjectNextSEO()
      : {};

  return (
    <React.Fragment>
      {!error && !loading ? <NextSeo {...metatags} /> : null}
      <div className={'app'} id={'app'}>
        {layout ? <Layout>{children}</Layout> : children}
      </div>
    </React.Fragment>
  );
};

export default React.memo(App);
