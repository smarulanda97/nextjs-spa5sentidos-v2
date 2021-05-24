import React from 'react';
import Script from 'react-load-script';
import { Link } from '@components/index';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { ButtonColors } from '@types-app/index';
import { useAppConfig } from '@context/AppConfig/AppConfigContext';

const InstagramFeed: React.FC = () => {
  const { app } = useAppConfig();
  const { t } = useTranslation('common');

  const handleLoadScript = () => {
    const interval = setInterval(() => {
      const buttonFreeWidget = document.querySelector('.eapps-link');
      if (buttonFreeWidget) {
        buttonFreeWidget.remove();
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <React.Fragment>
      <Container fluid={'xl'} as={'section'} className={'mt-5 text-center'}>
        <h2 className="text-capitalize font-weight-bold title mb-sm-5 mb-4">
          {t('follow_us_on_instagram')}
        </h2>
        <Row>
          <Col>
            {app && app.elfsight_token ? (
              <div
                data-testid={'ig-feed-container'}
                className={app.elfsight_token}
              />
            ) : null}
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
        url={'//apps.elfsight.com/p/platform.js'}
      />
    </React.Fragment>
  );
};

const InstagramFeedComponent = React.memo(InstagramFeed);

export default InstagramFeedComponent;
