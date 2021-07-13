import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@utils/imageUtils';
import { useTranslation } from 'next-i18next';
import { Navigation } from '@components/index';
import { StrapiImage, Menu } from '@types-app/index';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './Footer.module.scss';

type Props = {
  socialMenu: Menu;
  logoFooter: StrapiImage;
  children?: JSX.Element | JSX.Element[];
};

const Footer: React.FC<Props> = (props) => {
  const { t } = useTranslation('common');
  const { children, logoFooter, socialMenu } = props;

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col>
            {/** Render footer logo */}
            {logoFooter && (
              <Link href={'/'}>
                <a className={'d-block'}>
                  <Image
                    src={asset(logoFooter.url)}
                    width={logoFooter.width}
                    height={logoFooter.height}
                    alt={logoFooter.alternativeText}
                  />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {children}
            {/** Render social menu <Navigation /> */}
            {socialMenu && (
              <Navigation
                menu={socialMenu}
                testId={'social-menu-footer'}
                className={'social-menu my-4'}
              />
            )}
            {/** Render copy right */}
            <p className={'text-center'}>
              <span>© Spa 5 Sentidos. &nbsp;</span>
              <span>{t('all_rights_reserved')}. &nbsp;</span>
              <span>{t('powered_by', { author: 'smarulanda97' })}.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
