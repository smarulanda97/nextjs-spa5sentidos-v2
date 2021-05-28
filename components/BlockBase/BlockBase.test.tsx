import { render } from '@utils/testUtils';
import { asset } from '@utils/imageUtils';
import { BlockBase } from '@components/index';

describe('BlockBase component', () => {
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
          alternativeText: '',
        },
      },
    };

    const { getByRole, getByTestId } = render(<BlockBase {...props} />);

    // Render container background
    const container = getByTestId('block-base');
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle(`
      background-image: url(${asset(props.images.desktop.url)});
      background-size: cover;
      background-repeat: no-repeat;
    `);

    // Title, video and body is rendered
    expect(getByRole('heading', { name: /spa overview/i })).toBeInTheDocument();
    expect(getByTestId('youtube-video')).toBeInTheDocument();
    expect(getByRole('paragraph')).toBeInTheDocument();
  });

  test('Does not render video and body if the props are not passed', () => {
    const props = {
      title: 'Spa overview',
    };

    const { queryByRole, queryByTestId } = render(<BlockBase {...props} />);

    expect(queryByTestId('youtube-video')).not.toBeInTheDocument();
    expect(queryByRole('paragraph')).not.toBeInTheDocument();
  });
});
