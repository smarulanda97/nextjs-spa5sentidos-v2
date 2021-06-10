import { render } from '@lib/jest/testUtils';
import { ServicesHome } from '@components/index';

describe('[Component] ServicesHome', () => {
  test('Render the block title and the services list', async () => {
    const { findAllByRole, getByRole } = render(<ServicesHome />);

    const blockTitle = getByRole('heading', {
      name: /popular_services/i,
    });
    expect(blockTitle).toBeInTheDocument();

    const servicesImages = await findAllByRole('img');
    expect(servicesImages).toHaveLength(4);
  });
});
