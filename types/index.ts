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

export type AppConFig = {
  __typename?: string;
  system: SystemConfig;
};

export type AppConfigQueryData = {
  config: {
    id: string;
    system: SystemConfig;
  };
};
