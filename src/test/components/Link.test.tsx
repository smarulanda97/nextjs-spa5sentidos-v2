import { render } from '@testing-library/react';
import { Link } from '../../components';
import { ButtonColors } from '../../types/global';

describe('[Component] Link', () => {
  test('Automatically add attribute rel noopener and noreferrer to external links', () => {
    const { getByRole } = render(
      <Link
        text={'Go to external'}
        color={ButtonColors.primary}
        href={'https://api.whatsapp.com/send?'}
      />
    );

    const link = getByRole('link', { name: 'Go to external' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
