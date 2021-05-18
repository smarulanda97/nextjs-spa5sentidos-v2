import { ServicesHome } from '@components/index';
import { render, screen } from '@utils/testUtils';

describe('Home page - Services list', () => {
  test('1. Render block title', () => {
    render(<ServicesHome />);

    const blockTitle = screen.getByRole('heading', {
      name: /popular_services/i,
    });
    expect(blockTitle).toBeInTheDocument();
  });

  test('2. Render list of two featured services with own services', async () => {
    render(<ServicesHome />);

    const servicesImages = await screen.findAllByRole('img');
    expect(servicesImages).toHaveLength(4);

    // const altText = servicesImages.map((element: any) => element.alt);
    // expect(altText).toEqual([
    //   'Facial cleansing service',
    //   'Suction cups service',
    // ]);
    //
    // /** Render links */
    const linksLearnMore = await screen.getAllByText(
      /(learn_more|book_massage)/i
    );
    expect(linksLearnMore).toHaveLength(8);
  });
});
