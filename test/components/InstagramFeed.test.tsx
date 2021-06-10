import { render } from '@lib/jest/testUtils';
import { InstagramFeed } from '@components/index';

describe('InstagramFeed component', () => {
  test.only('Render the iframe with IG feed', async () => {
    const { findByRole, findByTestId, getByText } = render(<InstagramFeed />);

    // Check than the block title is rendered
    const igTitle = await findByRole('heading', {
      name: /follow_us_on_instagram/i,
    });
    expect(igTitle).toBeInTheDocument();

    // Find button to instagram network
    expect(getByText(/^follow_us$/i)).toBeInTheDocument();
    expect(getByText(/^follow_us$/i)).toHaveAttribute('target', '_blank');

    // Find the container where the ig feed will be renderer
    const igFeedContainer = await findByTestId('ig-feed-container');
    expect(igFeedContainer).toBeInTheDocument();
    expect(igFeedContainer).toHaveClass(
      'elfsight-app-cbdcfb04-79f1-478c-b662-23542ada80d4'
    );
  });
});
