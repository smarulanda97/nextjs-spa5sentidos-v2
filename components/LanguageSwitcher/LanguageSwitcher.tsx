import React from 'react';
import { withTranslation } from 'next-i18next';
import styles from './LanguageSwitcher.module.scss';
import { withRouter, NextRouter } from 'next/router';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { EnglishFlag, SpanishFlag } from '@components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

interface WithRouterProps {
  router: NextRouter;
}

interface WithTranslationProps extends WithRouterProps {
  t(key: string, options?: any): string;
}

class LanguageSwitcher extends React.Component<WithTranslationProps> {
  changeLanguage(lang: string): void {
    this.props.router.push('/', '/', { locale: lang });
  }

  render(): JSX.Element {
    const { t } = this.props;

    return (
      <Dropdown
        drop={'left'}
        as={ButtonGroup}
        className={styles.sticky}
        data-testid={'language-switcher-container'}
      >
        <Dropdown.Toggle
          id="dropdown-language"
          aria-label={t('change_language')}
        >
          <span>{t('change_language')}</span>
          <FontAwesomeIcon icon={faLanguage} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.languageMenu}>
          <Dropdown.Item as="button" onClick={() => this.changeLanguage('es')}>
            <SpanishFlag height={`24px`} width={`auto`} />
            <span>{t('spanish')}</span>
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => this.changeLanguage('en')}>
            <EnglishFlag height={`24px`} width={`auto`} />
            <span>{t('english')}</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withTranslation()(withRouter(LanguageSwitcher));
