import { UiComponent } from "./common";

export type Page = {
  slug: string;
  title: string;
  components: {
    items: UiComponent[];
  };
};

export type PageResult = {
  page_All: {
    items: Page[];
  };
};
