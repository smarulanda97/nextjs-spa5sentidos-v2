import { gql } from '@apollo/client';

export const GET_DATA_APP_COMPONENT = gql`
  query GET_DATA_APP_COMPONENT($locale: String) {
    metatags(locale: $locale, limit: 1) {
      pathname
      basic_tags {
        title
        keywords
        description
        shortlink
        canonical
        robots
        image_src
      }
      open_graph {
        type
        site_name
        title
        description
        url
      }
      twitter {
        site
        card
        title
        description
        url
      }
    }
  }
`;
