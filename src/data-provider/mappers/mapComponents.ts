import { UiGuideDetails as UiGuideDetailsRaw } from "../../network/types/UiGuideDetails";
import { UiGuidesList as UiGuidesListRaw } from "../../network/types/UiGuideList";

import { UiComponent } from "@/ui/types/common";
import { ComponentType } from "../../network/types/common";

import { mapGuideDetails } from "./mapGuideDetails";
import { mapGuidesList } from "./mapGuidesList";

import { JSX } from "react";
import { UiGuideDetails } from "@/ui/components/UiGuideDetails/UiGuideDetails";

type MapperProps = {
  componentData: UiComponent;
};

type ComponentMap = {
  mapper: (props: MapperProps) => UiComponent;
  component: (props: UiComponent) => JSX.Element;
};

export const COMPONENT_MAPPER = {
  UiGuideDetails: {
    mapper: (props: MapperProps) =>
      mapGuideDetails({
        ...props,
        componentData: props.componentData as UiGuideDetailsRaw,
      }),
    component: UiGuideDetails,
  },
  UiGuidesList: {
    mapper: (props: MapperProps) =>
      mapGuidesList({
        ...props,
        componentData: props.componentData as UiGuidesListRaw,
      }),
    component: UiGuideDetails,
  },
} as const satisfies Record<ComponentType, ComponentMap>;

export const mapComponents = (components: UiComponent[]) => {
  return components.map((component) => {
    const mapper = COMPONENT_MAPPER[component.__typename]?.mapper;

    if (!mapper) {
      throw new Error(
        `No mapper found for component type: ${component.__typename}`
      );
    }

    return mapper({ componentData: component });
  });
};
