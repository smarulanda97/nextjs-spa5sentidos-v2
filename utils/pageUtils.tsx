import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ComponentsList } from '@components/index';
import { ApolloClient, DocumentNode } from '@apollo/client';
import {
  GET_DATA_LAYOUT_COMPONENT,
  GET_DATA_SERVICES_HOME_COMPONENT,
  GET_DATA_VIDEO_BLOCK_COMPONENT,
  GET_DATA_APP_CONFIG_CONTEXT,
  GET_DATA_SERVICES_ALL_COMPONENT,
  GET_DATA_APP_COMPONENT,
} from '@queries/index';

/**
 * DEFINE THE COMMONS QUERIES FOR ALL PAGES
 * Example:
 * - GET_DATA_LAYOUT_COMPONENT = Query for menus data, footer, etc.
 */
const globalPageQueries = [
  GET_DATA_APP_COMPONENT,
  GET_DATA_LAYOUT_COMPONENT,
  GET_DATA_APP_CONFIG_CONTEXT,
];

/**
 *
 * Define each query for an specific page
 */
const pageQueries: PageQueriesType = {
  indexPage: [GET_DATA_SERVICES_HOME_COMPONENT, GET_DATA_VIDEO_BLOCK_COMPONENT],
  servicesPage: [GET_DATA_SERVICES_ALL_COMPONENT],
};

/**
 *
 *
 */
const pageComponents: any = {
  indexPage: [
    {
      component: 'servicesHome',
    },
    {
      component: 'videoHome',
    },
  ],
  servicesPage: [
    {
      component: 'servicesAll',
    },
  ],
};

type PageQueriesType = {
  [pageName: string]: DocumentNode[];
};

/**
 * Return a promise with all queries that be needed to build a page
 * with SSR
 */
export function queriesForPage(
  pageName: string,
  apolloClient: ApolloClient<any>,
  locale: string
): Promise<any> {
  let queries = globalPageQueries;
  if (Object.prototype.hasOwnProperty.call(pageQueries, pageName)) {
    queries = globalPageQueries.concat(pageQueries[pageName]);
  }

  const variables = {
    locale: locale,
  };

  return Promise.all(
    queries.map((pageQuery) =>
      apolloClient.query({
        variables,
        query: pageQuery,
      })
    )
  );
}

/**
 * Render a dynamic list of string
 * to mapped components
 */
export function renderPageComponents(pageName: string): JSX.Element[] {
  let components = [];
  if (Object.prototype.hasOwnProperty.call(pageComponents, pageName)) {
    components = pageComponents[pageName];
  }

  return components.map((block) => {
    let component: any = ComponentsList['unrendered'];

    if (typeof ComponentsList[block.component] !== 'undefined') {
      component = ComponentsList[block.component];
    }

    return React.createElement(component, {
      key: uuidv4(),
      componentName: block.component,
    });
  });
}
