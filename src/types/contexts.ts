import { StrapiImage, MetaTags } from './global';

type SystemConfig = {
  email: string;
  phone: string;
  address: string;
  site_name: string;
  description: string;
  __typename?: string;
  phone_number: string;
  logo: StrapiImage | null;
  favicon: StrapiImage | null;
  logo_footer: StrapiImage | null;
};

type AppConfig = {
  elfsight_token: string;
  __typename?: string;
};

type ConFigContext = {
  app: AppConfig;
  system: SystemConfig;
  metatags: MetaTags[];
};

export type { ConFigContext };
