import { Layout } from '@components/index';
import userEvent from '@testing-library/user-event';
import { render, within, waitFor } from '@lib/jest/testUtils';

describe('Layout component', () => {
  test('Render the logo, main navigation menu, and social menu in the header', async () => {
    const { findByRole, findByTestId, getByTestId } = render(<Layout />);

    const headerContainer = getByTestId('layout-header-container');
    expect(headerContainer).toBeInTheDocument();

    const logo = await within(headerContainer).findByAltText(
      /spa 5 sentidos logo/i
    );
    expect(logo).toBeInTheDocument();

    /** Render nav container */
    const navbar = await findByRole('navigation');
    expect(navbar).toBeInTheDocument();

    /** Render main menu and social menu */
    const mainMenu = await findByTestId('main-menu');
    expect(mainMenu).toBeInTheDocument();

    const mainMenuLinks = within(mainMenu).getAllByRole('button');
    expect(mainMenuLinks.length).toBeGreaterThanOrEqual(3);

    const socialMenu = getByTestId('social-menu');
    expect(socialMenu).toBeInTheDocument();

    const socialMenuIcons = within(socialMenu).getAllByRole('img');
    expect(socialMenuIcons).toHaveLength(2);
  });

  test('Toggle mobile menu when user click on the toggle button', async () => {
    const { getByRole, getByTestId } = await render(<Layout />);

    /** Check by default collapse navbar is closed */
    const buttonToggleMenu = getByRole('button', {
      name: /toggle navigation/i,
    });
    expect(buttonToggleMenu).toBeInTheDocument();
    expect(buttonToggleMenu).toHaveClass('collapsed');

    const collapseNavbar = getByTestId('navbar-collapse');
    expect(collapseNavbar).toBeInTheDocument();
    expect(collapseNavbar).not.toHaveClass('show');

    /** Open mobile menu */
    userEvent.click(buttonToggleMenu);
    await waitFor(() => {
      expect(buttonToggleMenu).not.toHaveClass('collapsed');
      expect(collapseNavbar).toHaveClass('show');
    });

    /** Close mobile menu */
    userEvent.click(buttonToggleMenu);
    await waitFor(() => {
      expect(buttonToggleMenu).toHaveClass('collapsed');
      expect(collapseNavbar).not.toHaveClass('show');
    });
  });

  test('Render the social navigation in the footer', async () => {
    const { findByTestId } = render(<Layout />);

    const socialMenu = await findByTestId('social-menu-footer');
    expect(socialMenu).toBeInTheDocument();

    const socialMenuIcons = within(socialMenu).getAllByRole('img');
    expect(socialMenuIcons).toHaveLength(2);

    const socialLinks = within(socialMenu).getAllByRole('button');
    expect(socialLinks).toHaveLength(2);
  });

  test('Render the logo and the copyright in the footer', async () => {
    const { findByRole, getByText } = render(<Layout />);

    const footer = await findByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    const logo = within(footer).getByRole('img', {
      name: /spa 5 sentidos logo/i,
    });
    expect(logo).toBeInTheDocument();

    expect(getByText(/all_rights_reserved/gi)).toBeInTheDocument();
    expect(getByText(/powered_by/gi)).toBeInTheDocument();
  });
});
