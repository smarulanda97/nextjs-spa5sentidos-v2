import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'react-bootstrap';
import { asset } from '@utils/imageUtils';
import styles from './Header.module.scss';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

const Header: React.FC = () => {
  const {
    system: { logo },
  } = useAppConfig();

  return (
    <div className={styles.header}>
      <Navbar>
        <div className={styles.brand}>
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
      </Navbar>
    </div>
  );
};

const HeaderComponent = React.memo(Header);

export default HeaderComponent;
