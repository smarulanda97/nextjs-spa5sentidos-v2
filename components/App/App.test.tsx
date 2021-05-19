import { App } from '@components/index';
import { render, screen } from '@testing-library/react';

describe('App component', () => {
  test('Render layout component when layout property is set to true', () => {
    render(<App layout={true} />);

    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveAttribute('id', 'main-content');
  });

  test('Does not render layout component when layout property is set to false', () => {
    render(<App layout={false} />);

    const mainContainer = screen.queryByRole('main');
    expect(mainContainer).not.toBeInTheDocument();
  });
});
