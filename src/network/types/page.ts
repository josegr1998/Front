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
  __typename: string;
};

export type Guide = {
  title: string;
  publishedDate: string;
  description: {
    html: string;
  };
  sumary: string;
  chapters: Items<Chapter>;
  slug: string;
  __typename: string;
};

export type GuideItemRaw = Guide & {
  components: Items<UiComponent>;
};

export type GuideResponse = {
  guide_All: {
    items: GuideItemRaw[];
  };
};
