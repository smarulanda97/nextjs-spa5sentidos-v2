type Menu = {
  id: string;
  name: string;
  items: MenuItem[];
  __typename?: string;
  machine_name: string;
};

type MenuItem = {
  id: string;
  link: string;
  title: string;
  icon?: StrapiImage;
  __typename?: string;
};

type StrapiImage = {
  url: string;
  name: string;
  width: number;
  height: number;
  __typename?: string;
  alternativeText: string;
  provider_metadata?: string;
};

type ResponsiveImages = {
  mobile: StrapiImage;
  desktop: StrapiImage;
};

type Service = {
  id: string;
  title: string;
  summary: string;
  slug: string;
  price: number;
  discount: number;
  home_service_included: boolean;
  images: {
    thumbnail: StrapiImage;
  };
};

type Url = {
  origin: string;
};

type Svg = {
  width: string;
  height: string;
};

type MetaTags = {
  pathname: string;
  basic_tags: {
    [name: string]: string;
  };
  open_graph?: {
    [name: string]: string;
  };
  twitter?: {
    [name: string]: string;
  };
};

export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum Locale {
  Colombia = 'es-CO',
  Global = 'en-US',
}

export enum Currency {
  Colombia = 'COP',
  Global = 'USD',
}

export type {
  Menu,
  MenuItem,
  StrapiImage,
  ResponsiveImages,
  Service,
  Url,
  Svg,
  MetaTags,
};
