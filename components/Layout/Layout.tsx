import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_LAYOUT_DATA } from '@components/queries';
import { Header, Navigation } from '@components/index';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const { locale } = useRouter();
  const { loading, data } = useQuery(GET_LAYOUT_DATA, {
    variables: { locale },
  });

  return (
    <>
      <header>
        <Header>
          <Fragment>
            {data && !loading && data.mainMenu && (
              <Navigation
                testId={'main-menu'}
                menu={data.mainMenu[0]}
                className={'ml-auto text-center mt-lg-0 mt-3'}
              />
            )}
            {data && !loading && data.socialMenu && (
              <Navigation
                testId={'social-menu'}
                menu={data.socialMenu[0]}
                className={'ml-auto text-center mt-lg-0 mt-3'}
              />
            )}
          </Fragment>
        </Header>
      </header>
      <main id={'main-content'}>{children}</main>
    </>
  );
};

const LayoutComponent = React.memo(Layout);

export default LayoutComponent;
