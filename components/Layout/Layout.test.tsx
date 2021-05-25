import { Footer, Layout } from '@components/index';
import { render, within } from '@utils/testUtils';

describe('Layout component', () => {
  test('Render main navigation and social in header', async () => {
    const { getByRole, findByTestId, getByTestId } = render(<Layout />);

    /** Render nav container */
    const navbar = getByRole('navigation');
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

  test('Render social navigation in footer', async () => {
    const { findByTestId } = render(<Layout />);

    const socialMenu = await findByTestId('social-menu-footer');
    expect(socialMenu).toBeInTheDocument();

    const socialMenuIcons = within(socialMenu).getAllByRole('img');
    expect(socialMenuIcons).toHaveLength(2);

    const socialLinks = within(socialMenu).getAllByRole('button');
    expect(socialLinks).toHaveLength(2);
  });

  test('Render copyright', () => {
    const { getByText } = render(<Layout />);
    expect(getByText(/all_rights_reserved/gi)).toBeInTheDocument();
    expect(getByText(/powered_by/gi)).toBeInTheDocument();
  });
});
