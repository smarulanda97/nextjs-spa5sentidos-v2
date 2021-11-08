import React from 'react';
import { Nav } from 'react-bootstrap';
import { Menu, MenuItem } from '../../types';
import { NavigationItem } from '../index';

type Props = {
  menu: Menu;
  testId: string;
  className?: string;
};

const Navigation: React.FC<Props> = (props) => {
  const { menu, testId, className = '' } = props;

  return (
    <Nav className={className} data-testid={testId}>
      {menu.items.map((item: MenuItem) => (
        <NavigationItem item={item} key={item.id} />
      ))}
    </Nav>
  );
};

export default Navigation;
