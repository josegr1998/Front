import { UiGuidesList } from "../../network/types/UiGuideList";
import { UiGuidesListProps } from "@/ui/components/UiGuidesList/UiGuidesList.types";

export const mapGuidesList = ({
  componentData,
}: {
  componentData: UiGuidesList;
}): UiGuidesListProps => {
  return {
    __typename: componentData.__typename,
    title: componentData.title,
  };
};
