import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from 'react-bootstrap';
import { asset } from '@utils/imageUtils';
import styles from './NavigationItem.module.scss';
import { isAbsoluteUrl } from '@utils/urlUtils';
import { NavigationItemProps } from '@types-app/index';

const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
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
