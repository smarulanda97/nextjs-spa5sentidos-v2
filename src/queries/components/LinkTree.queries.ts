import { gql } from '@apollo/client';

export const GET_DATA_LINK_TREE_COMPONENT = gql`
  query GET_DATA_LINK_TREE_COMPONENT($locale: String) {
    linkTreeMenu: menus(
      limit: 1
      locale: $locale
      where: { name: "link-tree" }
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
  }
`;
