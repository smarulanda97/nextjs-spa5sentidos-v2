import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';

import { asset } from '@utils/index';
import { Navigation } from '@components/index';
import { StrapiImage, Menu } from '@types-app/index';

import styles from './Footer.module.scss';

type Props = {
  socialMenu: Menu;
  footerMenu: Menu;
  contactMenu: Menu;
  openingMenu: Menu;
  description: string;
  logoFooter: StrapiImage;
};

const Footer: React.FC<Props> = (props) => {
  const { t } = useTranslation('common');
  const {
    logoFooter,
    socialMenu,
    openingMenu,
    contactMenu,
    description,
    footerMenu,
  } = props;

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
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
            <p>{description}</p>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h2>{t('important_links')}</h2>
            {footerMenu && (
              <Navigation
                menu={footerMenu}
                testId={'footer-menu-footer'}
                className={'menu-footer my-4'}
              />
            )}
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h2>{t('opening_hours')}</h2>
            {openingMenu && (
              <Navigation
                menu={openingMenu}
                testId={'opening-menu-footer'}
                className={'menu-opening my-4'}
              />
            )}
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h2>{t('contact_us')}</h2>
            {contactMenu && (
              <Navigation
                menu={contactMenu}
                testId={'contact-menu-footer'}
                className={'menu-contact my-4'}
              />
            )}
            {socialMenu && (
              <Navigation
                menu={socialMenu}
                testId={'social-menu-footer'}
                className={'menu-social my-4'}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={'text-center'}>
              <span>© Spa 5 Sentidos. &nbsp;</span>
              <span>{t('all_rights_reserved')}. &nbsp;</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
