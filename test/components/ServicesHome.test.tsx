import { ServicesHome } from '@components/index';
import { render, screen } from '@lib/jest/testUtils';

describe('Home page - Services list', () => {
  test('Render the block title', () => {
    render(<ServicesHome />);

    const blockTitle = screen.getByRole('heading', {
      name: /popular_services/i,
    });
    expect(blockTitle).toBeInTheDocument();
  });

  test('Render the list of two featured services with own services', async () => {
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

  test('Each book button has the attribute data-href with a link to Whatsapp', async () => {
    const { findAllByText } = render(<ServicesHome />);

    const bookButtons = await findAllByText(/book_massage/i);
    const targets: string[] = bookButtons.map((element) =>
      element.getAttribute('target')
    );

    // Each element redirect the user to whatsapp in new window
    expect(targets).toEqual(['_blank', '_blank', '_blank', '_blank']);

    const extractDomainRegex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/i;
    const hrefs: string[] = bookButtons.map((element) => {
      const href = element.getAttribute('data-href');
      return extractDomainRegex.exec(href)[1];
    });
    expect(hrefs).toEqual([
      'api.whatsapp.com',
      'api.whatsapp.com',
      'api.whatsapp.com',
      'api.whatsapp.com',
    ]);
  });
});
