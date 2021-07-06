import { gql } from '@apollo/client';

export const GET_DATA_SERVICES_HOME_COMPONENT = gql`
  query GET_DATA_SERVICES_HOME_COMPONENT($locale: String) {
    services(
      locale: $locale
      where: { featured: true }
      sort: "updated_at:desc"
      limit: 4
    ) {
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
