import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Footer, Header, Slider } from '@components/index';
import { GET_DATA_LAYOUT_COMPONENT } from '@queries/index';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const { locale } = useRouter();
  const { system } = useAppConfig();
  const { loading, data } = useQuery(GET_DATA_LAYOUT_COMPONENT, {
    variables: { locale },
  });

  const renderHeader = () => {
    if (!data?.mainMenu || !data?.socialMenu || !system?.logo) {
      return null;
    }
    return (
      <Header
        logo={system.logo}
        mainMenu={data.mainMenu[0]}
        socialMenu={data.socialMenu[0]}
      />
    );
  };

  const renderFooter = () => {
    if (!data?.socialMenu || !system?.logo_footer) {
      return null;
    }
    return (
      <Footer logoFooter={system.logo_footer} socialMenu={data.socialMenu[0]} />
    );
  };

  return (
    <React.Fragment>
      <header data-testid={'layout-header-container'}>
        {/**
         *
         * Rendering the following components
         *
         * <Header>
         *   <Navigation />
         *   <Navigation />
         *
         */}
        {renderHeader()}
        {data && !loading && data.sliders && <Slider sliders={data.sliders} />}
      </header>
      <main data-testid={'layout-main-container'} id={'main-content'}>
        {children}
      </main>
      {/**
       *
       * Rendering the following components
       *
       * <Footer>
       *   <Navigation>
       *
       */}
      {renderFooter()}
    </React.Fragment>
  );
};

export default React.memo(Layout);
