import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'react-bootstrap';

import { asset } from '@utils/imageUtils';
import { Navigation } from '@components/index';
import { StrapiImage, Menu } from '@types-app/index';

import styles from './Header.module.scss';

type Props = {
  logo: StrapiImage;
  mainMenu?: Menu;
  socialMenu?: Menu;
};

const Header: React.FC<Props> = (props) => {
  const { logo } = props;

  const renderLogo = (forMobile) => {
    if (!props.logo) {
      return null;
    }

    return (
      <div className={forMobile ? 'brand-mobile' : 'brand-desktop'}>
        <Link href={'/'}>
          <a className={'d-block'}>
            <Image
              src={asset(logo.url)}
              width={logo.width}
              height={logo.height}
              alt={logo.alternativeText}
            />
          </a>
        </Link>
      </div>
    );
  };

  const renderMainNavigation = () => {
    if (!props?.mainMenu) {
      return null;
    }

    return (
      <Navigation
        testId={'main-menu'}
        menu={props.mainMenu}
        className={'menu-main text-center mt-lg-0 mt-3'}
      />
    );
  };

  const renderSocialMenu = () => {
    if (!props.socialMenu) {
      return null;
    }

    return (
      <Navigation
        testId={'social-menu'}
        menu={props.socialMenu}
        className={'menu-social mt-lg-0 mt-3'}
      />
    );
  };

  return (
    <div className={`${styles.header} container-fluid`}>
      <Navbar expand={'lg'} className={'py-lg-0'}>
        {/*
         *
         * Rendering logo for mobile devices
         *
         */}
        {renderLogo(true)}
        <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
        <Navbar.Collapse
          id={'basic-navbar-nav'}
          data-testid={'navbar-collapse'}
        >
          {/*
           *
           * Rendering main navigation menu
           *
           */}
          {renderMainNavigation()}
          {/*
           *
           * Rendering logo for mobile devices
           *
           */}
          {renderLogo(false)}
          {/*
           *
           * Rendering social menu
           *
           */}
          {renderSocialMenu()}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default React.memo(Header);
