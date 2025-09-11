import { ComponentType } from '@/network/types/common';
import { UiGuidesList } from '@/ui/components/UiGuidesList/UiGuidesList';
import { mapGuidesList } from './mappers/mapGuidesList';
import { UiGuideDetails } from '@/ui/components/UiGuideDetails/UiGuideDetails';
import { mapGuideDetails } from './mappers/mapGuideDetails';
import { UiComponent as UiComponentMapped } from '@/ui/types/common';
import { JSX } from 'react';

type ComponentMap = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapper: (...args: any) => UiComponentMapped;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (...args: any) => JSX.Element;
};

export const COMPONENT_DEFINITIONS = {
  UiGuideDetails: {
    mapper: mapGuideDetails,
    component: UiGuideDetails,
  },
  UiGuidesList: {
    mapper: mapGuidesList,
    component: UiGuidesList,
  },
} as const satisfies Record<ComponentType, ComponentMap>;
