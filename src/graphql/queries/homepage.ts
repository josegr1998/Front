import { UI_GUIDES_LIST_FRAGMENT } from "../fragments/uiGuideList";

export const HOME_PAGE_QUERY = `
  query GetHomePage {
    page_All(where: { slug: { eq: "home" } }) {
      items {
        slug
        title
        components {
          items {
            ... on UiGuidesList {
              ...UiGuidesList
            }
          }
        }
      }
    }
  }
  ${UI_GUIDES_LIST_FRAGMENT}
`;
