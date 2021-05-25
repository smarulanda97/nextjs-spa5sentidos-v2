import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'next-i18next';
import { GET_LAYOUT_DATA } from '@components/queries';
import { Footer, Header, Navigation } from '@components/index';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const { loading, data } = useQuery(GET_LAYOUT_DATA, {
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
      </header>
      <main id={'main-content'}>{children}</main>
      <Footer>
        <React.Fragment>
          {data && !loading && data.socialMenu && (
            <Navigation
              menu={data.socialMenu[0]}
              testId={'social-menu-footer'}
              className={'social-menu my-4'}
            />
          )}
          <p className={'text-center'}>
            <span>© Spa 5 Sentidos. &nbsp;</span>
            <span>{t('all_rights_reserved')}. &nbsp;</span>
            <span>{t('powered_by', { author: 'smarulanda97' })}.</span>
          </p>
        </React.Fragment>
      </Footer>
    </>
  );
};

const LayoutComponent = React.memo(Layout);

export default LayoutComponent;
