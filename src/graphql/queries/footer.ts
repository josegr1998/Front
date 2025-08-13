export const FOOTER_QUERY = `
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
