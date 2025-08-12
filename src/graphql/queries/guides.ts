export const GUIDES_QUERY = `
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
