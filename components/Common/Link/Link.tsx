import Link from 'next/link';
import { isAbsoluteUrl } from '@utils/urlUtils';
import styles, { linkComponent } from './Link.module.scss';

import { LinkProps } from '@types-app/index';

const LinkComponent: React.FC<LinkProps> = (props) => {
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
