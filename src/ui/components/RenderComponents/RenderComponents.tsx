import { UiComponent } from "@/ui/types/common";
import { COMPONENT_TYPES, ComponentType } from "@/network/types/common";
import { COMPONENT_DEFINITIONS } from "@/data-provider/componentDefinitions";

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
          const Component = COMPONENT_DEFINITIONS[typename].component;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: FIX
          return <Component key={typename} {...(component as any)} />;
        }

        return null;
      })}
    </div>
  );
};
