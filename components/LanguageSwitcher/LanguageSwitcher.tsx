import React from 'react';
import { withRouter } from 'next/router';
import { withTranslation } from 'next-i18next';
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
        as={ButtonGroup}
        drop={'left'}
        data-testid={'language-switcher-container'}
      >
        <Dropdown.Toggle id="dropdown-language">
          <>
            <span>{t('change_language')}</span>
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button" onClick={() => this.changeLanguage('es')}>
            <span>{t('spanish')}</span>
            <SpanishFlag height={`24px`} width={`auto`} />
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => this.changeLanguage('en')}>
            <span>{t('english')}</span>
            <EnglishFlag height={`24px`} width={`auto`} />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withTranslation()(withRouter(LanguageSwitcher));

export { LanguageSwitcher as PureLanguageSwitcher };
