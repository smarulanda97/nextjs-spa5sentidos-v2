import { render } from '@utils/testUtils';
import { Header } from '@components/index';
import userEvent from '@testing-library/user-event';

describe('Header component', () => {
  test('Render app logo', async () => {
    const { findByAltText } = render(<Header />);

    const logo = await findByAltText(/spa 5 sentidos logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('Render main navigation', async () => {
    const { getByRole, getAllByRole } = await render(<Header />);

    /** Render nav container */
    expect(getByRole('navigation')).toBeInTheDocument();

    /** Render main navigation and social navigation */
    expect(getAllByRole('list')).toHaveLength(2);

    const listItems = getAllByRole('listitem');
    const menuText: string[] = listItems.map((element: HTMLElement) =>
      element.textContent.trim()
    );
    expect(menuText).toEqual([
      'home',
      'about us',
      'services',
      'gallery',
      'contact us',
      'facebook',
      'instagram',
      'whatsapp',
    ]);
  });

  test('Toggle mobile menu when user click on the toggler button', async () => {
    const { getByRole, getByTestId } = await render(<Header />);

    /** Check by default collapse navbar is closed */
    const buttonToggleMenu = getByRole('button', {
      name: /toggle navigation/i,
    });
    expect(buttonToggleMenu).toHaveAttribute('aria-expanded', 'false');

    const collapseNavbar = getByTestId('collapse-main-navigation');
    expect(collapseNavbar).toBeInTheDocument();
    expect(collapseNavbar).not.toHaveClass('show');

    userEvent.clear(buttonToggleMenu);
    userEvent.click(buttonToggleMenu);

    expect(buttonToggleMenu).toHaveAttribute('aria-expanded', 'true');
    expect(collapseNavbar).toHaveClass('show');

    userEvent.clear(buttonToggleMenu);
    userEvent.click(buttonToggleMenu);

    expect(buttonToggleMenu).toHaveAttribute('aria-expanded', 'false');
    expect(collapseNavbar).not.toHaveClass('show');
  });
});
