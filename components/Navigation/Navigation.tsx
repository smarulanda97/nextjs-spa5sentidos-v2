import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavigationItem } from '@components/index';
import { NavigationProps, MenuItem } from '@types-app/index';

const Navigation: React.FC<NavigationProps> = (props) => {
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
