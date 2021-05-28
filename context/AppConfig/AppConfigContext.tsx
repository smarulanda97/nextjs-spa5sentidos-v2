import { useQuery } from '@apollo/client';
import { ConFigContext } from '@types-app/index';
import { GET_DATA_APP_CONFIG_CONTEXT } from '@queries/index';
import React, { createContext, useContext, useMemo } from 'react';

type Props = {
  children: JSX.Element;
};

/**
 * Define a default values for context
 */
const appConfigDefaultValues: ConFigContext = {
  system: {
    email: '',
    phone: '',
    address: '',
    site_name: '',
    logo: null,
    favicon: null,
    logo_footer: null,
  },
  app: {
    elfsight_token: '',
  },
};

const AppConfigContext = createContext<ConFigContext>(appConfigDefaultValues);

/**
 * Create custom useAppConfig hook
 */
export function useAppConfig(): ConFigContext {
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
  const { data } = useQuery<any>(GET_DATA_APP_CONFIG_CONTEXT);

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
