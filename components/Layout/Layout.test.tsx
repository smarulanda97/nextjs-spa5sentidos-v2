import { Layout } from '@components/index';
import { render, within } from '@utils/testUtils';

describe('Layout component', () => {
  test('Render main navigation', async () => {
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
    expect(socialMenuIcons.length).toBeGreaterThanOrEqual(2);
  });
});
