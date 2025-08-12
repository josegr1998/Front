import { Component, TypeInfo } from "./common";

export type UiGuideDetails = {
  itemsPerPage: number;
  title: string;
  _system_: TypeInfo;
} & Component;
