import React from 'react';
import { withRouter } from 'next/router';
import { withTranslation } from 'next-i18next';
import styles from './LanguageSwitcher.module.scss';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { EnglishFlag, SpanishFlag } from '@components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

// interface WithRouterProps {
//   router: NextRouter;
// }
//
// type WithTranslationProps = WithRouterProps;

class LanguageSwitcher extends React.Component<any> {
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
        <Dropdown.Toggle id="dropdown-language">
          <span>{t('change_language')}</span>
          <FontAwesomeIcon icon={faGlobeAmericas} />
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
