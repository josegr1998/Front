import { gql } from "@apollo/client";

export const GUIDE_PAGE_QUERY = (slug: string) => gql`
  query MyQuery {
    guide_All(
      where: {
        slug: {
          eq: "${slug}"
        }
      }
    ) {
      items {
        title
        chapters {
          items {
            chapterName
            content {
              html
            }
            title
          }
        }
        description
        publishedDate
        components {
          items {
            title
            __typename
          }
        }
      }
    }
  }
`;

export const createGuidePageQuery = (slug: string) => GUIDE_PAGE_QUERY(slug);
