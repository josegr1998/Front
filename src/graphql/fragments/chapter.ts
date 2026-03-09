import { HTML_FRAGMENT_DEFINITION } from "./html";

export const CHAPTER_FRAGMENT = `
  fragment ChapterFields on GuideChapter {
    chapterName
    content {
      ...${HTML_FRAGMENT_DEFINITION.name}
    }
    title
  }
`;

export const CHAPTER_FRAGMENT_DEFINITION = {
  name: "ChapterFields",
  fragment: CHAPTER_FRAGMENT,
  dependencies: [HTML_FRAGMENT_DEFINITION.fragment],
};
