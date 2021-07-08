import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'react-bootstrap';
import { asset } from '@utils/imageUtils';
import styles from './Header.module.scss';
import { Navigation } from '@components/index';
import { HeaderProps } from '@types-app/index';

const Header: React.FC<HeaderProps> = (props) => {
  const { logo } = props;

  const renderMainNavigation = () => {
    if (!props?.mainMenu) {
      return null;
    }

    return (
      <Navigation
        testId={'main-menu'}
        menu={props.mainMenu}
        className={'text-center mt-lg-0 mt-3 main-menu'}
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
        className={'social-menu mt-lg-0 mt-3'}
      />
    );
  };

  return (
    <header>
      <div className={styles.header}>
        <Navbar expand={'lg'} className={'py-lg-0'}>
          <div className={`brand ${styles.brand}`}>
            {logo && (
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
            )}
          </div>
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
             * Rendering social menu
             *
             */}
            {renderSocialMenu()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default React.memo(Header);
