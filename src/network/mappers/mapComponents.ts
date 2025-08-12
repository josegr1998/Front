import { UiGuideDetails } from "../types/UiGuideDetails";

import { UiComponent } from "@/ui/types/common";
import { ComponentType } from "../types/common";

import { mapGuideDetails } from "./mapGuideDetails";
import { mapGuidesList } from "./mapGuidesList";
import { UiGuidesList } from "../types/UiGuideList";

type MapperProps = {
  componentData: UiComponent;
};

export const COMPONENT_MAPPER = {
  UiGuideDetails: (props: MapperProps) =>
    mapGuideDetails({
      ...props,
      componentData: props.componentData as UiGuideDetails,
    }),
  UiGuidesList: (props: MapperProps) =>
    mapGuidesList({
      ...props,
      componentData: props.componentData as UiGuidesList,
    }),
} as const satisfies Record<ComponentType, (props: MapperProps) => UiComponent>;

export const mapComponents = (components: UiComponent[]) => {
  return components.map((component) => {
    console.log(component);
    const mapper = COMPONENT_MAPPER[component.__typename];
    if (!mapper) {
      throw new Error(
        `No mapper found for component type: ${component.__typename}`
      );
    }
    return mapper({ componentData: component });
  });
};
