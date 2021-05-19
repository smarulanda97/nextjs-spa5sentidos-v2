import React from 'react';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <main id={'main-content'}>{children}</main>
    </>
  );
};

const LayoutComponent = React.memo(Layout);

export default LayoutComponent;
