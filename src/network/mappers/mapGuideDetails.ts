import { UiGuideDetailsProps } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import { UiGuideDetails } from "../types/UiGuideDetails";

export const mapGuideDetails = ({
  componentData,
}: {
  componentData: UiGuideDetails;
}): UiGuideDetailsProps => {
  return {
    __typename: componentData.__typename,
    title: componentData.title,
  };
};
