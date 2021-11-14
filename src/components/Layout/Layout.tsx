import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { normalizeMenus } from '@utils/index';
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
    const menus = normalizeMenus(['main', 'social'], data);

    return (
      // @ts-ignore
      <Header {...menus} logo={system?.logo} />
    );
  };

  const renderFooter = () => {
    const menus = normalizeMenus(
      ['social', 'opening', 'contact', 'footer'],
      data
    );

    return (
      // @ts-ignore
      <Footer
        {...menus}
        logoFooter={system?.logo_footer}
        description={system?.description || ''}
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
