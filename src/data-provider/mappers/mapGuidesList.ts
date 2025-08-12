import { UiGuidesList } from "../../network/types/UiGuideList";
import { UiGuidesListProps } from "@/ui/components/UiGuidesList/UiGuidesList.types";
import { Guide } from "@/network/types/UiGuideDetails";

export type GuideListPageData = {
  guides: Guide[];
};

export const mapGuidesList = ({
  componentData,
  pageData,
}: {
  componentData: UiGuidesList;
  pageData: GuideListPageData;
}): UiGuidesListProps => {
  return {
    __typename: componentData.__typename,
    title: componentData.title,
    guides: pageData.guides.map((guide) => ({
      title: guide.title,
      publishedDate: guide.publishedDate,
      description: guide.description,
      slug: guide.slug,
    })),
  };
};
