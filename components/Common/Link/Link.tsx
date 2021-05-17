import Link from 'next/link';
import styles, { linkComponent } from './Link.module.scss';

import { LinkComponentProps } from '@types-app/index';

const LinkComponent: React.FC<LinkComponentProps> = ({
  text,
  color,
  href = '#',
  target = '_SELF',
  className = '',
}): React.ReactElement => {
  return (
    <Link href={href}>
      <a
        className={`btn btn-sm ${linkComponent} ${styles[color]} ${className}`}
        target={target}
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkComponent;
