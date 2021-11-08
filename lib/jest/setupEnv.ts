import { loadEnvConfig } from '@next/env';

export default async (): Promise<any> => {
  loadEnvConfig(process.env.PWD);
};
