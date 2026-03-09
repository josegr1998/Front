import { COMPONENT_TYPES, ComponentType } from "../../network/types/common";
import { COMPONENT_DEFINITIONS } from "../componentDefinitions";

type MapperProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contextData?: any;
};

const isValidComponent = (type: string): type is ComponentType =>
  COMPONENT_TYPES.includes(type as ComponentType);

export const mapComponents = ({ components, contextData }: MapperProps) => {
  return components.map((component) => {
    const typename = component.__typename;

    if (!isValidComponent(typename)) {
      throw new Error(`Invalid component type: ${typename}`);
    }

    const mapper = COMPONENT_DEFINITIONS[typename]?.mapper;

    if (!mapper) {
      throw new Error(
        `No mapper found for component type: ${component.__typename}`
      );
    }

    return mapper({ componentData: component, contextData });
  });
};
