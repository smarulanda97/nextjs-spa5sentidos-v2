import { render } from '../../lib/jest/testUtils';
import { VideoBlock } from '../../components';

describe('[Component] VideoBlock', function () {
  test('Render video, title and description', async () => {
    const { findByRole, getByTestId, getByRole } = render(<VideoBlock />);

    const title = await findByRole('heading', { name: /spa overview/i });
    expect(title).toBeInTheDocument();
    expect(getByTestId('embed-video-container')).toBeInTheDocument();
    expect(getByRole('paragraph')).toBeInTheDocument();
  });
});
