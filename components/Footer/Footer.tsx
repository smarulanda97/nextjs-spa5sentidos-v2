import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@utils/imageUtils';
import styles from './Footer.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

type FooterProps = {
  children?: JSX.Element;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  const {
    system: { logo_footer },
  } = useAppConfig();

  return (
    <footer className={`${styles.footer} pt-5 pb-4`}>
      <Container>
        <Row>
          <Col>
            {logo_footer && (
              <Link href={'/'}>
                <a className={'d-block'}>
                  <Image
                    src={asset(logo_footer.url)}
                    width={logo_footer.width}
                    height={logo_footer.height}
                    alt={logo_footer.alternativeText}
                  />
                </a>
              </Link>
            )}
          </Col>
        </Row>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </footer>
  );
};

const FooterComponent = React.memo(Footer);

export default FooterComponent;
