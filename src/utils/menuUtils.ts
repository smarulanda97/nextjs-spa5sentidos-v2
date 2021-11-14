import { Menu } from '@types-app/global';

type GetMenus = {
  [key: string]: Menu;
};

export function normalizeMenus(menus: string[], data: any): GetMenus {
  const normalizedData = {};

  if (!menus.length || !data) {
    return normalizedData;
  }

  menus.map((menu: string) => {
    let menuObject = {};
    const menuName = `${menu}Menu`;

    if (menuName in data && Array.isArray(data[menuName]))
      menuObject = data[menuName][0];

    normalizedData[menuName] = menuObject;
  });

  return normalizedData;
}
