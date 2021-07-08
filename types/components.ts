import { Menu, ButtonColors, StrapiImage, MenuItem, Service } from './global';

type AppProps = {
  layout: boolean;
  url: {
    origin: string;
  };
  children?: JSX.Element | JSX.Element[];
};

type HeaderProps = {
  logo: StrapiImage;
  mainMenu?: Menu;
  socialMenu?: Menu;
};

type NavigationProps = {
  menu: Menu;
  testId: string;
  className?: string;
};

type NavigationItemProps = {
  item: MenuItem;
};

type SliderProps = {
  sliders: SliderItemProps[];
};

type SliderItemProps = {
  id: string;
  title: string;
  subtitle?: string;
  images: {
    desktop: StrapiImage;
    mobile: StrapiImage;
  };
};

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

type FooterProps = {
  socialMenu: Menu;
  logoFooter: StrapiImage;
  children?: JSX.Element | JSX.Element[];
};

type LinkProps = {
  text: string;
  href?: string;
  target?: string;
  className?: string;
  color: ButtonColors;
};

type BlockBaseProps = {
  title: string;
  link?: string;
  body?: string;
  videoId?: any;
  images?: {
    desktop?: StrapiImage;
    mobile?: StrapiImage;
  };
};

type SvgProps = {
  width: string;
  height: string;
};

type EmbedVideoProps = {
  videoId: string;
};

type ServicesListItemProps = {
  service: Service;
};

type PriceProps = {
  price: number;
  discount: number;
};

type OfferProps = {
  discount: number;
};

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
  EmbedVideoProps,
  ServicesListItemProps,
  PriceProps,
  OfferProps,
};
