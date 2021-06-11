import {
  AppProps,
  HeaderProps,
  NavigationProps,
  NavigationItemProps,
  SliderProps,
  SliderItemProps,
  LayoutProps,
  LinkProps,
  FooterProps,
  BlockBaseProps,
  SvgProps,
} from './components';
import { ConFigContext } from './contexts';
import { Menu, MenuItem, StrapiImage, ResponsiveImages } from './global';

export { ButtonColors } from './global';

/**
 * Export all components props
 */
export type {
  AppProps,
  HeaderProps,
  NavigationProps,
  NavigationItemProps,
  SliderProps,
  SliderItemProps,
  LayoutProps,
  LinkProps,
  FooterProps,
  BlockBaseProps,
  SvgProps,
};

/**
 * Export all context types
 */
export type { ConFigContext };

/**
 * Export all global types
 */
export type { Menu, MenuItem, StrapiImage, ResponsiveImages };
