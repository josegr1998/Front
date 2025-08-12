import { UiGuideDetailsProps } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import { UiGuideDetails } from "../../network/types/UiGuideDetails";

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
