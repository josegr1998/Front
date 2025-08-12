import { JSX } from "react";
import { UiGuideDetails } from "../UiGuideDetails/UiGuideDetails";
import { UiComponent } from "@/types/graphql";

const COMPONENT_TYPES = ["UiGuideDetails"] as const;

type ComponentType = (typeof COMPONENT_TYPES)[number];

const COMPONENT_MAP = {
  UiGuideDetails: UiGuideDetails,
} as const satisfies Record<ComponentType, () => JSX.Element>;

const isValidComponent = (type: string): type is ComponentType =>
  COMPONENT_TYPES.includes(type as ComponentType);

type Props = {
  components: UiComponent[];
};

export const RenderComponents = ({ components }: Props) => {
  return (
    <div>
      {components.map((component) => {
        const typename = component.__typename;

        if (isValidComponent(typename)) {
          const Component = COMPONENT_MAP[typename];

          return <Component key={typename} {...component} />;
        }

        return null;
      })}
    </div>
  );
};
