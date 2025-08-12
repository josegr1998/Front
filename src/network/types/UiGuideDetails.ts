import { Component, TypeInfo } from "./common";

type Items<T> = {
  items: T[];
};

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
  description: string;
  chapters: Items<GuideChapter>;
};

export type UiGuideDetails = {
  itemsPerPage: number;
  title: string;
  _system_: TypeInfo;
} & Component;
