import { DICTIONARY_FRAGMENT_DEFINITION } from "./dictionary";
import { MULTIPLE_CHOICE_FRAGMENT_DEFINITION } from "./multipleChoice";
import { SYSTEM_FRAGMENT_DEFINITION } from "./system";

export const UI_GUIDES_LIST_FRAGMENT = `
  fragment UiGuidesList on UiGuidesList {
    itemsPerPage
    title
    dictionary {
        items {
          ...${DICTIONARY_FRAGMENT_DEFINITION.name}
        }
      }
    __typename
    _system_ {
      type {
        _system_ {
          ...${SYSTEM_FRAGMENT_DEFINITION.name}
        }
      }
    }
    listOrder {
      items {
        _system_ {
          ...${MULTIPLE_CHOICE_FRAGMENT_DEFINITION.name}
        }
      }
    }
  }
`;

export const UI_GUIDES_LIST_FRAGMENT_DEFINITION = {
  name: "UiGuidesList",
  fragment: UI_GUIDES_LIST_FRAGMENT,
  dependencies: [
    DICTIONARY_FRAGMENT_DEFINITION.fragment,
    SYSTEM_FRAGMENT_DEFINITION.fragment,
    MULTIPLE_CHOICE_FRAGMENT_DEFINITION.fragment,
  ],
};
