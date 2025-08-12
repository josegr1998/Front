export type SystemInfo = {
  codename: string;
  name: string;
};

export type TypeInfo = {
  _system_: {
    codename: string;
  };
};

export type ListOrderItem = {
  _system_: SystemInfo;
};

export type UiGuidesList = {
  itemsPerPage: number;
  title: string;
  _system_: TypeInfo;
  listOrder: {
    items: ListOrderItem[];
  };
};

export type UiComponent = {
  __typename: string;
  title: string;
};

export type GuidePageComponent = UiComponent;

export type HomePageComponent = UiGuidesList;

export type GuidePage = {
  slug: string;
  title: string;
  components: {
    items: GuidePageComponent[];
  };
};

export type HomePage = {
  slug: string;
  title: string;
  components: {
    items: HomePageComponent[];
  };
};

export type HomePageQueryResult = {
  page_All: {
    items: HomePage[];
  };
};

export type GuidePageQueryResult = {
  page_All: {
    items: GuidePage[];
  };
};
