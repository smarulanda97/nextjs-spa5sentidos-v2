import React from 'react';
import Script from 'next/script';
import { Link } from '@components/index';
import { useTranslation } from 'next-i18next';
import { ButtonColors } from '@types-app/index';
import styles from './InstagramFeed.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

const InstagramFeed: React.FC = () => {
  const { app } = useAppConfig();
  const { t } = useTranslation('common');

  const handleLoadScript = () => {
    const interval = setInterval(() => {
      const buttonFreeWidget = document.querySelector('.eapps-link');
      if (buttonFreeWidget) {
        buttonFreeWidget.remove();
        const window = document.querySelector('.eapps-instagram-feed > a');
        window.removeAttribute('style');
        window.innerHTML = '';
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <React.Fragment>
      <Container fluid={'xl'} as={'section'} className={styles.container}>
        <h2 className="font-weight-bold title mb-sm-5 mb-4">
          {t('follow_us_on_instagram')}
        </h2>
        <Row>
          <Col>
            <div
              data-testid={'ig-feed-container'}
              className={`${app.elfsight_token ? app.elfsight_token : ''}`}
            />
          </Col>
        </Row>
        <Link
          target={'_blank'}
          text={t('follow_us')}
          className={'my-5'}
          color={ButtonColors.primary}
        />
      </Container>
      <Script
        onLoad={handleLoadScript}
        strategy={'lazyOnload'}
        src={'//apps.elfsight.com/p/platform.js'}
      />
    </React.Fragment>
  );
};

export default InstagramFeed;
