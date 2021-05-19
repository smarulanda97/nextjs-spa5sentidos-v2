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

    const servicesTitles = screen.getAllByTestId('service-title');
    const titlesText: string[] = servicesTitles.map((element: HTMLElement) => {
      return `${element.textContent.toLowerCase()} service`;
    });
    expect(titlesText).toEqual([
      'facial cleansing service',
      'suction cups service',
      'volcanic rocks service',
      'relaxing massage service',
    ]);

    /** Render links */
    const linksLearnMore = screen.getAllByText(/(learn_more|book_massage)/i);
    expect(linksLearnMore).toHaveLength(8);
  });
});
