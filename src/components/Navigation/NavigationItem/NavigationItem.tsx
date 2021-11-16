import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

import { MenuItem } from '@types-app/index';
import { asset, getLinkAttributes } from '@utils/index';

import styles from './NavigationItem.module.scss';

type Props = {
  item: MenuItem;
};

const NavigationItem: React.FC<Props> = ({ item }) => {
  const { asPath } = useRouter();
  const { title, link, id, icon } = item;

  const getClassNames = () => {
    let classes = '';
    classes += asPath === link ? 'nav-link--active ' : '';
    classes += icon ? styles.navLinkIcon : styles.navLinkText;
    return classes;
  };

  return (
    <Nav.Item key={id}>
      {link === '<nolink>' ? (
        <span className={'nav-link'}>{title}</span>
      ) : (
        <Link href={link} passHref>
          <Nav.Link
            title={title}
            {...getLinkAttributes(link)}
            className={getClassNames()}
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
