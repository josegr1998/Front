export const UI_GUIDE_DETAILS_FRAGMENT = `
  fragment UiGuideDetails on UiGuideDetails {
    title
    variant {
      items {
        _system_ {
          codename
        }
      }
    }
    dictionary {
      items {
        text
        _system_ {
          codename
        }
      }
    }
    __typename
  }
`;

export const UI_GUIDE_DETAILS_FRAGMENT_DEFINITION = {
  name: 'UiGuideDetails',
  fragment: UI_GUIDE_DETAILS_FRAGMENT,
};
