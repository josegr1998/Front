import { UiComponent } from "@/ui/types/common";
import { COMPONENT_TYPES, ComponentType } from "@/data-provider/types/common";
import { COMPONENT_MAPPER } from "@/data-provider/mappers/mapComponents";

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
          const Component = COMPONENT_MAPPER[typename].component;

          return <Component key={typename} {...component} />;
        }

        return null;
      })}
    </div>
  );
};
