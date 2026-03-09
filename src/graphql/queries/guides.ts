import { HTML_FRAGMENT_DEFINITION } from "../fragments/html";

export const GUIDES_QUERY = `
  query MyQuery {
    guide_All {
      items {
        title
        description {
          ...${HTML_FRAGMENT_DEFINITION.name}
        }
        sumary
        publishedDate
        slug
      }
    }
  }
  ${HTML_FRAGMENT_DEFINITION.fragment}
`;
