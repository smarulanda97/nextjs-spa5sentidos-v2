import { App } from '@components/index';
import { render, screen } from '@lib/jest/testUtils';

describe.skip('[Component] App', () => {
  test('Render layout component when layout property is set to true', () => {
    const url = {
      origin: 'http://localhost:3000',
    };
    render(<App layout={true} url={url} />);

    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveAttribute('id', 'main-content');
  });

  test('Does not render layout component when layout property is set to false', () => {
    const url = {
      origin: 'http://localhost:3000',
    };
    render(<App layout={false} url={url} />);

    const mainContainer = screen.queryByRole('main');
    expect(mainContainer).not.toBeInTheDocument();
  });
});
