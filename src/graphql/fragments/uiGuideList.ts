export const UI_GUIDES_LIST_FRAGMENT = `
  fragment UiGuidesList on UiGuidesList {
    itemsPerPage
    title
    dictionary {
        items {
          _system_ {
            codename
          }
          text
        }
      }
    __typename
    _system_ {
      type {
        _system_ {
          codename
        }
      }
    }
    listOrder {
      items {
        _system_ {
          codename
          name
        }
      }
    }
  }
`;
