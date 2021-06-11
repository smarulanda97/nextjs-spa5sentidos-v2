import { render, screen } from '@lib/jest/testUtils';
import { waitFor, within } from '@testing-library/react';
import { LanguageSwitcher } from '@components/index';
import userEvent from '@testing-library/user-event';

describe('[Component] LanguageSwitcher', () => {
  test('Display the sticky icon for i18n', async () => {
    const { getByTestId, getByRole, container } = render(<LanguageSwitcher />);

    const i18nContainer = getByTestId('language-switcher-container');
    expect(i18nContainer).toBeInTheDocument();
    // expect(i18nContainer).toHaveStyle({
    //   position: 'fixed',
    //   bottom: '10%',
    //   right: '5%',
    // });
    const i18nButton = getByRole('button', { name: /change_language/i });

    expect(i18nButton).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('Open and close language selector, when the user click on sticky icon', async () => {
    const { getByRole } = render(<LanguageSwitcher />);

    const buttonI18n = getByRole('button');
    expect(buttonI18n).toBeInTheDocument();

    userEvent.click(buttonI18n);

    await waitFor(() => {
      const spanishButton = getByRole('button', { name: 'spanish' });
      const englishButton = getByRole('button', { name: 'english' });

      expect(spanishButton).toBeInTheDocument();
      expect(englishButton).toBeInTheDocument();

      expect(spanishButton).toBeVisible();
      expect(englishButton).toBeVisible();
    });

    userEvent.click(buttonI18n);

    await waitFor(() => {
      expect(getByRole('button', { name: 'spanish' })).not.toBeVisible();
      expect(getByRole('button', { name: 'english' })).not.toBeVisible();
    });
  });

  test('Display the flag for each language', async () => {
    const { getByRole, getAllByRole } = render(<LanguageSwitcher />);

    const buttonI18n = getByRole('button');

    userEvent.click(buttonI18n);

    await waitFor(() => {
      expect(getAllByRole('img')).toHaveLength(2);
    });
  });
});
