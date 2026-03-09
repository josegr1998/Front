export const HEADER_QUERY = `
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
