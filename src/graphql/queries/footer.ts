import { gql } from "@apollo/client";

export const FOOTER_QUERY = gql`
  query MyQuery {
    footer(codename: "footer") {
      copyright
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
