import { UiComponent } from "./common";

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
