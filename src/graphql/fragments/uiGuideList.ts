import { gql } from "@apollo/client";

export const UI_GUIDES_LIST_FRAGMENT = gql`
  fragment UiGuidesList on UiGuidesList {
    itemsPerPage
    title
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
