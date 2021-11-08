import { render } from '../../lib/jest/testUtils';
import { SocialRedirect } from '../../components';

describe('[Component] LinkTree', function () {
  let component: any;

  beforeAll(() => {
    component = render(<SocialRedirect />);
  });

  test('Render social links (Whats, FB, IG, Website) with each image', async () => {
    const { findAllByRole, getAllByRole } = component;

    const links = await findAllByRole('button');
    expect(links).toHaveLength(4);

    expect(getAllByRole('img')).toHaveLength(4);

    const textLinks = links.map(
      (link: HTMLAnchorElement) =>
        link.getAttribute('title').toLowerCase() || ''
    );
    expect(textLinks).toEqual(['website', 'whatsapp', 'facebook', 'instagram']);
  });
});
