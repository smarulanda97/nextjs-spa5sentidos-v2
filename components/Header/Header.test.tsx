import { render } from '@utils/testUtils';
import { Header } from '@components/index';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Header component', () => {
  // test('Render app logo', async () => {
  //   const { findByAltText } = render(<Header />);
  //
  //   const logo = await findByAltText(/spa 5 sentidos logo/i);
  //   expect(logo).toBeInTheDocument();
  // });
  //
  // test('Toggle mobile menu when user click on the toggler button', async () => {
  //   const { getByRole, getByTestId } = await render(<Header />);
  //
  //   /** Check by default collapse navbar is closed */
  //   const buttonToggleMenu = getByRole('button', {
  //     name: /toggle navigation/i,
  //   });
  //   expect(buttonToggleMenu).toBeInTheDocument();
  //   expect(buttonToggleMenu).toHaveClass('collapsed');
  //
  //   const collapseNavbar = getByTestId('navbar-collapse');
  //   expect(collapseNavbar).toBeInTheDocument();
  //   expect(collapseNavbar).not.toHaveClass('show');
  //
  //   /** Open mobile menu */
  //   userEvent.click(buttonToggleMenu);
  //   await waitFor(() => {
  //     expect(buttonToggleMenu).not.toHaveClass('collapsed');
  //     expect(collapseNavbar).toHaveClass('show');
  //   });
  //
  //   /** Close mobile menu */
  //   userEvent.click(buttonToggleMenu);
  //   await waitFor(() => {
  //     expect(buttonToggleMenu).toHaveClass('collapsed');
  //     expect(collapseNavbar).not.toHaveClass('show');
  //   });
  // });
});
