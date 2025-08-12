import { Items, UiComponent } from "./common";

export type Page = {
  slug: string;
  title: string;
  components: {
    items: UiComponent[];
  };
};

export type PageResponse = {
  page_All: {
    items: Page[];
  };
};

export type Chapter = {
  chapterName: string;
  title: string;
  content: {
    html: string;
  };
};

export type Guide = {
  title: string;
  publishedDate: string;
  description: string;
  chapters: Items<Chapter>;
};

type GuideItem = Guide & {
  components: Items<UiComponent>;
};

export type GuideResponse = {
  guide_All: {
    items: GuideItem[];
  };
};
