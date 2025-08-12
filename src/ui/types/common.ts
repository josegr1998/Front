import { UiGuideDetailsProps } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";

export type UiComponent = UiGuideDetailsProps;

export type UiPage = {
  title: string;
  components: UiComponent[];
};
