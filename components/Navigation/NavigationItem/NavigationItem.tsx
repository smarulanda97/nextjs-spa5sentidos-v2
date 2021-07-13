import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from 'react-bootstrap';
import { asset } from '@utils/imageUtils';
import { MenuItem } from '@types-app/index';
import { isAbsoluteUrl } from '@utils/urlUtils';

import styles from './NavigationItem.module.scss';

type Props = {
  item: MenuItem;
};

const NavigationItem: React.FC<Props> = ({ item }) => {
  return (
    <Nav.Item key={item.id}>
      <Link href={item.link} passHref>
        <Nav.Link
          {...(isAbsoluteUrl(item.link)
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className={item.icon ? styles.navLinkIcon : styles.navLinkText}
        >
          {item.icon && (
            <Image
              width={item.icon.width}
              height={item.icon.height}
              src={asset(item.icon.url)}
              alt={`${item.title}`}
            />
          )}
          {!item.icon && <span>{item.title}</span>}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

export default NavigationItem;
