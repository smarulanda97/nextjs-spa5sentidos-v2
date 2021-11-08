import { render } from '../../lib/jest/testUtils';
import { BlockBase } from '../../components';
import { within } from '@testing-library/react';

describe('[Component] BlockBase', () => {
  test('Render background, video, title, and body when pass all props', () => {
    const props = {
      title: 'Spa overview',
      videoId: 'MFROybUazN4',
      body: `<p>sed do eiusmod tempor incididunt ut labore et</p>`,
      images: {
        desktop: {
          width: 300,
          height: 300,
          url: '/uploads/backround_block_overview_cd75fa1c81.jpg',
          name: 'lorem ipsum',
          alternativeText: 'Background spa overview',
        },
      },
    };

    const { getByRole, getByTestId } = render(<BlockBase {...props} />);

    // Render container of block
    const container = getByTestId('block-base-container');
    expect(container).toBeInTheDocument();

    // Render background
    expect(
      within(container).getByRole('img', { name: /background/i })
    ).toBeInTheDocument();

    // Title, video and body is rendered
    expect(getByRole('heading', { name: /spa overview/i })).toBeInTheDocument();
    expect(getByTestId('embed-video-container')).toBeInTheDocument();
    expect(getByRole('paragraph')).toBeInTheDocument();
  });

  test('Does not render video and body if the props are not passed', () => {
    const props = {
      title: 'Spa overview',
    };

    const { queryByRole, queryByTestId } = render(<BlockBase {...props} />);

    expect(queryByTestId('embed-video-container')).not.toBeInTheDocument();
    expect(queryByRole('paragraph')).not.toBeInTheDocument();
  });
});
