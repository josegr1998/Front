import { UiGuideDetailsProps } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import { UiGuidesList } from "../types/UiGuideList";

export const mapGuidesList = ({
  componentData,
}: {
  componentData: UiGuidesList;
}): UiGuideDetailsProps => {
  return {
    __typename: componentData.__typename,
    title: componentData.title,
  };
};
