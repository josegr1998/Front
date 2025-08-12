import { Component, SystemInfo, TypeInfo } from "./common";

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
