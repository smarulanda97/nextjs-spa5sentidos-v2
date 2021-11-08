import { render } from '@lib/jest/testUtils';
import { EmbedVideo } from '@components/index';
import userEvent from '@testing-library/user-event';

const videoId = '17T1ozOQ1ao';

describe('[EmbedVideo] component', () => {
  describe('Lazy loading for embed video', () => {
    test('Display the thumbnail', async () => {
      const { findByRole } = render(<EmbedVideo videoId={videoId} />);

      expect(
        await findByRole('img', { name: /thumbnail/i })
      ).toBeInTheDocument();
    });

    test('Load video when click on play button', async () => {
      const { findByRole, queryByTestId, getByTestId } = render(
        <EmbedVideo videoId={videoId} />
      );

      expect(getByTestId('thumbnail-container')).toBeInTheDocument();
      expect(queryByTestId('video-container')).not.toBeInTheDocument();

      const playButton = await findByRole('button', { name: /play/i });
      expect(playButton).toBeInTheDocument();
      expect(playButton).toHaveClass('play');

      userEvent.click(playButton);

      expect(getByTestId('video-container')).toBeInTheDocument();
    });
  });
});
