import { UiGuideDetails as UiGuideDetailsRaw } from "../../network/types/UiGuideDetails";
import { UiGuidesList as UiGuidesListRaw } from "../../network/types/UiGuideList";

import {
  ComponentType,
  UiComponent as UiComponentRaw,
} from "../../network/types/common";

import { mapGuideDetails } from "./mapGuideDetails";
import { mapGuidesList } from "./mapGuidesList";

import { JSX } from "react";
import { UiGuideDetails } from "@/ui/components/UiGuideDetails/UiGuideDetails";
import { UiComponent as UiComponentMapped } from "@/ui/types/common";
import { UiGuidesList } from "@/ui/components/UiGuidesList/UiGuidesList";
import { Guide } from "@/network/types/page";

type MapperProps = {
  componentData: UiComponentRaw;
  pageData?: Guide;
};

type ComponentMap = {
  mapper: (props: MapperProps) => UiComponentMapped;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => JSX.Element;
};

export const COMPONENT_MAPPER = {
  UiGuideDetails: {
    mapper: (props: MapperProps) =>
      mapGuideDetails({
        ...props,
        componentData: props.componentData as UiGuideDetailsRaw,
        pageData: props.pageData as Guide,
      }),
    component: UiGuideDetails,
  },
  UiGuidesList: {
    mapper: (props: MapperProps) =>
      mapGuidesList({
        ...props,
        componentData: props.componentData as UiGuidesListRaw,
      }),
    component: UiGuidesList,
  },
} as const satisfies Record<ComponentType, ComponentMap>;

export const mapComponents = ({
  components,
  pageData,
}: {
  components: UiComponentRaw[];
  pageData?: Guide;
}) => {
  return components.map((component) => {
    const mapper = COMPONENT_MAPPER[component.__typename]?.mapper;

    if (!mapper) {
      throw new Error(
        `No mapper found for component type: ${component.__typename}`
      );
    }

    return mapper({ componentData: component, pageData });
  });
};
