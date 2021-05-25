import { useQuery } from '@apollo/client';
import { ConFig, AppConfigQueryData } from '@types-app/index';
import { GET_APP_CONFIG } from '@context/AppConfig/AppConfigContext.queries';
import React, { createContext, useContext, useMemo } from 'react';

type Props = {
  children: JSX.Element;
};

/**
 * Define a default values for context
 */
const appConfigDefaultValues: ConFig = {
  system: {
    email: '',
    phone: '',
    address: '',
    site_name: '',
    logo: null,
    favicon: null,
  },
  app: {
    elfsight_token: '',
  },
};

const AppConfigContext = createContext<ConFig>(appConfigDefaultValues);

/**
 * Create custom useAppConfig hook
 */
export function useAppConfig(): ConFig {
  const context = useContext(AppConfigContext);

  if (!context) {
    throw new Error('useAppConfig must be used within an AppConfigProvider');
  }

  return context;
}

/**
 * Create AppConfigProvider
 */
export const AppConfigProvider: React.FC<Props> = ({ children }) => {
  const { data } = useQuery<AppConfigQueryData>(GET_APP_CONFIG);

  const value = useMemo(() => {
    if (!data) {
      return appConfigDefaultValues;
    }

    return { ...data.config };
  }, [data]);

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
};
