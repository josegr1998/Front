import { gql } from "@apollo/client";

export const GUIDE_PAGE_QUERY = (slug: string) => gql`
  {
    page_All(
      where: {
        slug: {
          eq: "${slug}"
        }
      }
    ) {
      items {
        slug
        title
        components {
          items {
            ... on UiGuideDetails {
              __typename
              title
              guide {
                publishedDate
                description
                chapters {
                  items {
                    content {
                      html
                    }
                    chapterName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const createGuidePageQuery = (slug: string) => GUIDE_PAGE_QUERY(slug);
