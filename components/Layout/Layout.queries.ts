import { gql } from '@apollo/client';

export const GET_LAYOUT_DATA = gql`
  query GetLayoutData($locale: String) {
    mainMenu: menus(
      limit: 1
      locale: $locale
      where: { name: "main-navigation" }
    ) {
      id
      name
      machine_name
      items {
        id
        title
        link
      }
    }
    socialMenu: menus(
      limit: 1
      locale: $locale
      where: { name: "social-navigation" }
    ) {
      id
      name
      machine_name
      items {
        id
        title
        link
        icon {
          url
          name
          width
          height
          alternativeText
          provider_metadata
        }
      }
    }
    sliders(locale: $locale) {
      id
      title
      subtitle
      images {
        desktop {
          url
          name
          width
          height
          alternativeText
          provider_metadata
        }
        mobile {
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
