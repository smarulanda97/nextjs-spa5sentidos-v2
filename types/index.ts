export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export type StrapiImage = {
  url: string;
  name: string;
  width: number;
  height: number;
  __typename?: string;
  alternativeText: string;
  provider_metadata?: string;
};

type SystemConfig = {
  email: string;
  phone: string;
  address: string;
  site_name: string;
  __typename?: string;
  logo: StrapiImage | null;
  favicon: StrapiImage | null;
};

type AppConfig = {
  elfsight_token: string;
  __typename?: string;
};

export type ConFig = {
  __typename?: string;
  system: SystemConfig;
  app: AppConfig;
};

export type AppConfigQueryData = {
  config: {
    id: string;
    system: SystemConfig;
    app: AppConfig;
  };
};

export type MenuItem = {
  id: string;
  link: string;
  title: string;
  icon?: StrapiImage;
  __typename?: string;
};

export type Menu = {
  id: string;
  name: string;
  __typename?: string;
  machine_name: string;
  items: MenuItem[];
};
