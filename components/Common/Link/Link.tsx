import Link from 'next/link';
import styles, { linkComponent } from './Link.module.scss';

import { LinkProps } from '@types-app/index';

const LinkComponent: React.FC<LinkProps> = (props) => {
  const { text, color, href = '#', target = '_self', className = '' } = props;

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
