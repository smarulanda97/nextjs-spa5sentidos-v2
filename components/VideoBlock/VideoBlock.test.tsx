import { render } from '@utils/testUtils';
import { VideoBlock } from '@components/index';

describe('VideoBlock component', function () {
  test('Render video, title and description', async () => {
    const { findByRole, getByTestId, getByRole } = render(<VideoBlock />);

    const title = await findByRole('heading', { name: /spa overview/i });
    expect(title).toBeInTheDocument();
    expect(getByTestId('youtube-video')).toBeInTheDocument();
    expect(getByRole('paragraph')).toBeInTheDocument();
  });
});
