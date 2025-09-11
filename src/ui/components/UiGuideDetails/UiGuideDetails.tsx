import { UiGuideDetailsProps } from './UiGuideDetails.types';
import { UiGuideDetails_V1 } from './UiGuideDetails_V1';
import { UiGuideDetails_V2 } from './UiGuideDetails_V2';

type ComponentVersion = 'v1' | 'v2';

const COMPONENT_MAP = {
  v1: UiGuideDetails_V1,
  v2: UiGuideDetails_V2,
} as const satisfies Record<
  ComponentVersion,
  React.ComponentType<UiGuideDetailsProps>
>;

export const UiGuideDetails = (props: UiGuideDetailsProps) => {
  const Component = COMPONENT_MAP[props.variant];

  return <Component {...props} />;
};
