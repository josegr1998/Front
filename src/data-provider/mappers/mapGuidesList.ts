import { UiGuidesList } from "../../network/types/UiGuideList";
import { UiGuidesListProps } from "@/ui/components/UiGuidesList/UiGuidesList.types";
import { Guide } from "@/network/types/UiGuideDetails";

export type GuideListPageData = {
  guides: Guide[];
};

const sortGuides = (guides: Guide[], listOrder: string) => {
  if (listOrder === "newest_to_oldest")
    return guides.sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );

  return guides;
};

export const mapGuidesList = ({
  componentData,
  pageData,
}: {
  componentData: UiGuidesList;
  pageData: GuideListPageData;
}): UiGuidesListProps => {
  const sortOrder = componentData.listOrder.items[0]._system_.codename;

  const sortedGuides = sortGuides(pageData.guides, sortOrder);

  return {
    __typename: componentData.__typename,
    title: componentData.title,
    guides: sortedGuides,
    itemsPerPage: componentData.itemsPerPage,
  };
};
