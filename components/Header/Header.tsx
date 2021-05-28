import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'react-bootstrap';
import { asset } from '@utils/imageUtils';
import styles from './Header.module.scss';
import { Navigation } from '@components/index';
import { HeaderProps } from '@types-app/index';

const Header: React.FC<HeaderProps> = (props) => {
  const { logo, mainMenu, socialMenu } = props;

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
            {/*<Navigation*/}
            {/*  testId={'main-menu'}*/}
            {/*  menu={mainMenu}*/}
            {/*  className={'ml-auto text-center mt-lg-0 mt-3'}*/}
            {/*/>*/}
            {/*<Navigation*/}
            {/*  testId={'social-menu'}*/}
            {/*  menu={socialMenu}*/}
            {/*  className={'social-menu ml-auto mt-lg-0 mt-3'}*/}
            {/*/>*/}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default React.memo(Header);
