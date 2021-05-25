import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'react-bootstrap';
import { asset } from '@utils/imageUtils';
import styles from './Header.module.scss';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

type HeaderProps = {
  children?: JSX.Element;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const {
    system: { logo },
  } = useAppConfig();

  return (
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
          {children}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const HeaderComponent = React.memo(Header);

export default HeaderComponent;
