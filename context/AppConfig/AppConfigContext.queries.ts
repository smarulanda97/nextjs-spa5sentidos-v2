import { gql } from '@apollo/client';

export const GET_APP_CONFIG = gql`
  query GetAppConfig {
    config {
      system {
        site_name
        email
        phone_number
        address
        logo {
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
    }
  }
`;
