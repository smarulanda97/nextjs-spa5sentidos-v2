import Link from 'next/link';
import { ButtonColors } from '@types-app/index';
import { isAbsoluteUrl } from '@utils/urlUtils';

import styles, { linkComponent } from './Link.module.scss';

type Props = {
  text: string;
  href?: string;
  target?: string;
  className?: string;
  color: ButtonColors;
};

const LinkComponent: React.FC<Props> = (props) => {
  const { text, color, href = '#', target = '_self', className = '' } = props;

  return (
    <Link href={href}>
      <a
        role={'link'}
        target={target}
        data-href={href}
        aria-label={text}
        {...(isAbsoluteUrl(href) ? { rel: 'noopener noreferrer' } : {})}
        className={`btn btn-sm ${linkComponent} ${styles[color]} ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkComponent;
