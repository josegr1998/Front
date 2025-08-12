import { COMPONENT_TYPES, ComponentType } from "../../network/types/common";

import { mapGuideDetails } from "./mapGuideDetails";
import { mapGuidesList } from "./mapGuidesList";

import { JSX } from "react";
import { UiGuideDetails } from "@/ui/components/UiGuideDetails/UiGuideDetails";
import { UiComponent as UiComponentMapped } from "@/ui/types/common";
import { UiGuidesList } from "@/ui/components/UiGuidesList/UiGuidesList";

type ComponentMap = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapper: (props: any) => UiComponentMapped;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => JSX.Element;
};

export const COMPONENT_MAPPER = {
  UiGuideDetails: {
    mapper: mapGuideDetails,
    component: UiGuideDetails,
  },
  UiGuidesList: {
    mapper: mapGuidesList,
    component: UiGuidesList,
  },
} as const satisfies Record<ComponentType, ComponentMap>;

const isValidComponent = (type: string): type is ComponentType =>
  COMPONENT_TYPES.includes(type as ComponentType);

export const mapComponents = ({
  components,
  pageData,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageData?: any;
}) => {
  return components.map((component) => {
    const typename = component.__typename;

    if (!isValidComponent(typename)) {
      throw new Error(`Invalid component type: ${typename}`);
    }

    const mapper = COMPONENT_MAPPER[typename]?.mapper;

    if (!mapper) {
      throw new Error(
        `No mapper found for component type: ${component.__typename}`
      );
    }

    return mapper({ componentData: component, pageData });
  });
};
