import React from 'react';
import { Layout } from '@components/index';
import { AppProps } from '@types-app/index';

class App extends React.Component<AppProps> {
  render() {
    const { layout, children } = this.props;

    return (
      <div className={'app'} id={'app'}>
        {layout ? <Layout>{children}</Layout> : children}
      </div>
    );
  }
}

export default React.memo(App);
