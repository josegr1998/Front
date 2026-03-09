import { UiGuideDetailsProps } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import { UiGuidesListProps } from "@/ui/components/UiGuidesList/UiGuidesList.types";

export type UiComponent = UiGuideDetailsProps | UiGuidesListProps;

export type UiPage = {
  title: string;
  components: UiComponent[];
};
