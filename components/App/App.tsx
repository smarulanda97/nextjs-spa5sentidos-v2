import React from 'react';
import { NextSeo } from 'next-seo';
import { Url } from '@types-app/index';
import { Layout } from '@components/index';
import { withRouter, NextRouter } from 'next/router';

interface Props {
  url: Url;
  layout: boolean;
  children?: JSX.Element | JSX.Element[];
}

interface WithRouterProps extends Props {
  router: NextRouter;
}

class App extends React.Component<WithRouterProps> {
  render() {
    const { layout, children, router, url } = this.props;

    const tags = {
      title: 'Spa 5 Sentidos',
      description: 'Spa 5 Sentidos es un Spa',
      defaultTitle: 'Spa 5 Sentidos - Servicio a domicilio de masajes',
      openGraph: {
        type: 'website',
        title: 'Spa 5 Sentidos',
        url: url.origin + router.asPath,
        defaultTitle: 'Spa 5 Sentidos - Servicio a domicilio de masajes',
      },
    };

    return (
      <>
        <NextSeo {...tags} />
        <div className={'app'} id={'app'}>
          {layout ? <Layout>{children}</Layout> : children}
        </div>
      </>
    );
  }
}

export default React.memo(withRouter(App));
