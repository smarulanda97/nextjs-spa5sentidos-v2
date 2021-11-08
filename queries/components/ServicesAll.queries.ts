import { gql } from '@apollo/client';

export const GET_DATA_SERVICES_ALL_COMPONENT = gql`
  query GET_DATA_SERVICES_ALL_COMPONENT($locale: String) {
    services(locale: $locale, sort: "updated_at:desc", limit: 50) {
      id
      title
      summary
      slug
      price
      discount
      home_service_included
      images {
        thumbnail {
          url
          name
          width
          height
          alternativeText
          provider_metadata
        }
      }
    }
  }
`;
