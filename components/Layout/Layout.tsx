import React from 'react';
import { Header } from '@components/index';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <Header />
      </header>
      <main id={'main-content'}>{children}</main>
    </>
  );
};

const LayoutComponent = React.memo(Layout);

export default LayoutComponent;
