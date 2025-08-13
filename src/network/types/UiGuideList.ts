import { Component, TypeInfo } from "./common";
import { Guide } from "./UiGuideDetails";

type System = {
  codename: "newest_to_oldest" | "oldest_to_newest";
};

export type ListOrderItem = {
  _system_: System;
};

export type UiGuidesList = {
  itemsPerPage: number;
  title: string;
  _system_: TypeInfo;
  listOrder: {
    items: ListOrderItem[];
  };
} & Component;

export type GuideListResponse = {
  guide_All: {
    items: Guide[];
  };
};
