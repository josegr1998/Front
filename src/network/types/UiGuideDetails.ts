import { DictionaryKeys } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import { Component, Items, TypeInfo, System } from "./common";

type HtmlContent = {
  html: string;
};

export type GuideChapter = {
  __typename: string;
  content: HtmlContent;
  chapterName: string;
};

export type Guide = {
  __typename: string;
  publishedDate: string;
  description: {
    html: string;
  };
  slug: string;
  title: string;
  chapters: Items<GuideChapter>;
};

export type DictionaryItem = {
  _system_: System<DictionaryKeys>;
  text: string;
};

export type UiGuideDetailsDictionary = Items<DictionaryItem>;

export type UiGuideDetails = {
  itemsPerPage: number;
  title: string;
  dictionary: UiGuideDetailsDictionary;
  _system_: TypeInfo;
} & Component;
