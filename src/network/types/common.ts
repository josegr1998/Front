import { UiGuideDetails } from "./UiGuideDetails";
import { UiGuidesList } from "./UiGuideList";

export const COMPONENT_TYPES = ["UiGuideDetails", "UiGuidesList"] as const;

export type Items<T> = {
  items: T[];
};

export type ComponentType = (typeof COMPONENT_TYPES)[number];

export type SystemInfo = {
  codename: string;
  name: string;
};

export type TypeInfo = {
  _system_: {
    codename: string;
  };
};

export type Component = {
  __typename: ComponentType;
};

export type UiComponent = UiGuideDetails | UiGuidesList;
