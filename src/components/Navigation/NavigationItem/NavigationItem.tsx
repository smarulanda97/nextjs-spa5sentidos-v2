import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from 'react-bootstrap';

import { asset } from '../../../utils/imageUtils';
import { MenuItem } from '../../../types';
import { getLinkAttributes } from '../../../utils';

import styles from './NavigationItem.module.scss';

type Props = {
  item: MenuItem;
};

const NavigationItem: React.FC<Props> = ({ item }) => {
  const { title, link, id, icon } = item;

  return (
    <Nav.Item key={id}>
      {link === '<nolink>' ? (
        <span className={'nav-link'}>{title}</span>
      ) : (
        <Link href={link} passHref>
          <Nav.Link
            title={title}
            {...getLinkAttributes(link)}
            className={`${icon ? styles.navLinkIcon : styles.navLinkText} `}
          >
            {icon ? (
              <Image
                alt={`${title}`}
                width={icon.width}
                height={icon.height}
                src={asset(icon.url)}
              />
            ) : null}
            {title ? <span className={'nav-item-text'}>{title}</span> : null}
          </Nav.Link>
        </Link>
      )}
    </Nav.Item>
  );
};

export default NavigationItem;
