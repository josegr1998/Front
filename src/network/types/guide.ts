import { Chapter } from './chapter';
import { Items, UiComponent } from './common';

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
