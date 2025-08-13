import { ComponentType } from "@/network/types/common";

type GuideChapter = {
  contentHtml: string;
  chapterName: string;
  chapterTitle: string;
};

export type DictionaryKeys =
  | "dictionary_item___table_of_contents"
  | "dictionary_item___published";

export type DictionaryItem = {
  key: DictionaryKeys;
  value: string;
};

export type Dictionary = DictionaryItem[];

export type UiGuideDetailsProps = {
  title: string;
  __typename: ComponentType;
  description: string;
  publishedDate: string;
  chapters: GuideChapter[];
  labels: {
    tableOfContentsLabel: string;
    publishedDateLabel: string;
  };
};
