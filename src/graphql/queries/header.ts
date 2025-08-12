import { gql } from "@apollo/client";

export const HEADER_QUERY = gql`
  query MyQuery {
    header(codename: "header") {
      title
      links {
        items {
          title
          url
        }
      }
    }
  }
`;
