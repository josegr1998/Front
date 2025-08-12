import { ComponentType } from "@/network/types/common";

type GuideChapter = {
  contentHtml: string;
  chapterName: string;
  chapterTitle: string;
};

export type UiGuideDetailsProps = {
  title: string;
  __typename: ComponentType;
  description: string;
  publishedDate: string;
  chapters: GuideChapter[];
};
