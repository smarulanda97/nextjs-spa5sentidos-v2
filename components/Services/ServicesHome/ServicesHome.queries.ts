import { gql } from '@apollo/client';

export const GET_SERVICES_HOME = gql`
  query getServicesHomes($locale: String) {
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
