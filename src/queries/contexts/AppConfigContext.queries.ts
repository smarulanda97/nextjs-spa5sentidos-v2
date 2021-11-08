import { gql } from '@apollo/client';

export const GET_DATA_APP_CONFIG_CONTEXT = gql`
  query GET_DATA_APP_CONFIG_CONTEXT {
    config {
      system {
        site_name
        email
        phone_number
        address
        description
        logo {
          url
          name
          width
          height
          alternativeText
          provider_metadata
        }
        logo_footer {
          url
          name
          width
          height
          alternativeText
          provider_metadata
        }
        favicon {
          url
          name
          width
          height
          alternativeText
          provider_metadata
        }
      }
      app {
        elfsight_token
      }
    }
  }
`;
