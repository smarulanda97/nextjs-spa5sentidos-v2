import React from 'react';
import { Layout } from '@components/index';

interface AppProps {
  layout: boolean;
  children?: JSX.Element;
}

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

const AppComponent = React.memo(App);

export default AppComponent;
