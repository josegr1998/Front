import { Component, SystemInfo, TypeInfo } from "./common";
import { Guide } from "./UiGuideDetails";

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
} & Component;

export type GuideListResponse = {
  guide_All: {
    items: Guide[];
  };
};
