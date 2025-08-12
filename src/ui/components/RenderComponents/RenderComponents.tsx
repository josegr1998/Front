import { JSX } from "react";
import { UiGuideDetails } from "../UiGuideDetails/UiGuideDetails";
import { UiComponent } from "@/ui/types/common";
import { COMPONENT_TYPES, ComponentType } from "@/network/types/common";

const COMPONENT_MAP = {
  UiGuideDetails: UiGuideDetails,
  UiGuidesList: () => <div>UiGuidesList</div>,
} as const satisfies Record<ComponentType, (props: UiComponent) => JSX.Element>;

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
