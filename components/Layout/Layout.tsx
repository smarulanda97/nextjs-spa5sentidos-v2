import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_DATA_LAYOUT_COMPONENT } from '@queries/index';
import { Footer, Header, Navigation, Slider } from '@components/index';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const { locale } = useRouter();
  const {
    system: { logo_footer },
  } = useAppConfig();
  const { loading, data } = useQuery(GET_DATA_LAYOUT_COMPONENT, {
    variables: { locale },
  });

  return (
    <>
      <header>
        <Header>
          <React.Fragment>
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
                className={'social-menu ml-auto mt-lg-0 mt-3'}
              />
            )}
          </React.Fragment>
        </Header>
        {data && !loading && data.sliders && <Slider sliders={data.sliders} />}
      </header>
      <main id={'main-content'}>{children}</main>

      {data && data.socialMenu && logo_footer && (
        <Footer logoFooter={logo_footer} socialMenu={data.socialMenu[0]} />
      )}
    </>
  );
};

export default React.memo(Layout);
