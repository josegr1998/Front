import { CHAPTER_FRAGMENT_DEFINITION } from "./chapter";
import { HTML_FRAGMENT_DEFINITION } from "./html";
import { UI_GUIDE_DETAILS_FRAGMENT_DEFINITION } from "./uiGuideDetails";

export const GUIDE_FRAGMENT_DEFINITION = {
  name: "Guide",
  fragment: `
    fragment Guide on Guide {
      title
      chapters {
        items {
          ...${CHAPTER_FRAGMENT_DEFINITION.name}
        }
      }
      description {
        ...${HTML_FRAGMENT_DEFINITION.name}
      }
      publishedDate
      components {
        items {
          ...${UI_GUIDE_DETAILS_FRAGMENT_DEFINITION.name}
        }
      }
    }
  `,
  dependencies: [
    CHAPTER_FRAGMENT_DEFINITION.fragment,
    HTML_FRAGMENT_DEFINITION.fragment,
    UI_GUIDE_DETAILS_FRAGMENT_DEFINITION.fragment,
  ],
};
