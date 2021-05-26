import { gql } from '@apollo/client';

export const GET_VIDEO_BLOCK_DATA = gql`
  query GetVideoBlockData($locale: String) {
    videoBlock: blocks(
      limit: 1
      locale: $locale
      where: { machine_name: "block-overview" }
    ) {
      id
      title
      video_id
      machine_name
      body
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
