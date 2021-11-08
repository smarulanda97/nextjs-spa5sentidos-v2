import { render } from '../../lib/jest/testUtils';
import { ServicesHome } from '../../components';

describe('[Component] ServicesHome', () => {
  test('Render the block title and the services list', async () => {
    const { getByRole } = render(<ServicesHome />);

    const blockTitle = getByRole('heading', {
      name: /popular_services/i,
    });
    expect(blockTitle).toBeInTheDocument();
  });
});
