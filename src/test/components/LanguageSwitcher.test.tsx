import { render } from '@lib/jest/testUtils';
import { waitFor, screen } from '@testing-library/react';
import { LanguageSwitcher } from '@components/index';
import userEvent from '@testing-library/user-event';

describe('[Component] LanguageSwitcher', () => {
  test('Display the sticky icon for i18n', async () => {
    const { getByTestId, getByRole, container } = render(<LanguageSwitcher />);

    const i18nContainer = getByTestId('language-switcher-container');
    expect(i18nContainer).toBeInTheDocument();
    expect(i18nContainer).toHaveClass('sticky');
    const i18nButton = getByRole('button', { name: /change_language/i });

    expect(i18nButton).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('Open and close language selector, when the user click on sticky icon', async () => {
    const { getByRole } = render(<LanguageSwitcher />);

    const buttonI18n = getByRole('button', { name: /change_language/ });
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
