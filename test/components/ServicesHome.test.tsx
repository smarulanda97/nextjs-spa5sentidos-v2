import { render, screen } from '@test/testUtils';
import { ServicesHome } from '@components/index';

describe('Home page - Services list', () => {
  test('1. Render block title EN', () => {
    render(<ServicesHome />);

    const blockTitle = screen.getByRole('heading', {
      name: /popular services/i,
    });
    expect(blockTitle).toBeInTheDocument();
  });

  test('2. Render list of two featured services with own services', async () => {
    render(<ServicesHome />);

    const servicesImages = await screen.findAllByRole('img', {
      name: /service$/i,
    });
    expect(servicesImages).toHaveLength(2);

    const altText = servicesImages.map((element: any) => element.alt);
    expect(altText).toEqual([
      'Facial cleansing service',
      'Suction cups service',
    ]);

    /** Render links */
    const linksLearnMore = await screen.getAllByRole('link', {
      name: /(learn more|book a massage)/i,
    });
    expect(linksLearnMore).toHaveLength(4);
  });
});
