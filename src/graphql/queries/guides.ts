import { gql } from "@apollo/client";

export const GUIDES_QUERY = gql`
  query MyQuery {
    guide_All {
      items {
        title
        description
        publishedDate
        slug
      }
    }
  }
`;
