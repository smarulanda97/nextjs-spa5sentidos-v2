import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GET_DATA_LAYOUT_COMPONENT } from '@queries/index';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';
import { Footer, Header, Slider, LanguageSwitcher } from '@components/index';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const { locale } = useRouter();
  const { system } = useAppConfig();
  const { loading, data } = useQuery(GET_DATA_LAYOUT_COMPONENT, {
    variables: { locale },
  });

  const renderHeader = () => {
    const { mainMenu, socialMenu } = data;
    if (!mainMenu || !socialMenu || !system.logo) {
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
    const { logo_footer, description } = system;
    const { socialMenu, openingMenu, contactMenu } = data;
    if (
      !socialMenu ||
      !openingMenu ||
      !contactMenu ||
      !description ||
      !logo_footer ||
      !description
    ) {
      return null;
    }

    return (
      <Footer
        socialMenu={socialMenu[0]}
        openingMenu={openingMenu[0]}
        contactMenu={contactMenu[0]}
        logoFooter={system.logo_footer}
        description={system.description}
      />
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
      <LanguageSwitcher />
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
