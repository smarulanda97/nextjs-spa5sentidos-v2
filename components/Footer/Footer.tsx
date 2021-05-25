import React from 'react';
import styles from './Footer.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

type FooterProps = {
  children?: JSX.Element;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className={`${styles.footer} pt-5 pb-4`}>
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </footer>
  );
};

const FooterComponent = React.memo(Footer);

export default FooterComponent;
