import { render } from '@lib/jest/testUtils';
import { NavigationItem } from '@components/index';

const menuItemHome = {
  id: '1',
  title: 'Home',
  link: '/',
};

const menuItemWhatsApp = {
  id: '1',
  title: 'Whatsapp',
  link: 'https://api.whatsapp.com/send?phone=573014808380',
  icon: {
    url: '/uploads/whatsapp_fa920c1327.svg',
    name: 'whatsapp.svg',
    width: 512,
    height: 512,
    alternativeText: '',
  },
};

describe('[Component] NavigationItem', () => {
  test('Render simple link when the item menu does not have an icon image', () => {
    const { queryByText, queryByRole } = render(
      <NavigationItem item={menuItemHome} />
    );

    expect(queryByText(/home/i)).toBeInTheDocument();
    expect(queryByRole('img')).not.toBeInTheDocument();
  });

  test('When the item menu has icon image, render text and icon image', () => {
    const { queryByRole, queryByText } = render(
      <NavigationItem item={menuItemWhatsApp} />
    );

    expect(queryByRole('img')).toBeInTheDocument();
    expect(queryByText(/whatsapp/i)).toBeInTheDocument();
  });

  test('If the URL of menu item is absolute add the attribute target and rel', () => {
    const { queryByRole } = render(<NavigationItem item={menuItemWhatsApp} />);
    const instagramLInk = queryByRole('button');

    expect(instagramLInk).toBeInTheDocument();
    expect(instagramLInk).toHaveAttribute('target', '_blank');
    expect(instagramLInk).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test("If the URL of the link doesn't absolute then doesn't have the attribute target and rel", () => {
    const { queryByRole } = render(<NavigationItem item={menuItemHome} />);
    const instagramLInk = queryByRole('button');

    expect(instagramLInk).toBeInTheDocument();
    expect(instagramLInk).not.toHaveAttribute('target');
  });
});
