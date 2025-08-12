import { UiGuideDetailsProps } from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import { UiGuideDetails } from "../../network/types/UiGuideDetails";
import { Guide } from "@/network/types/page";

export const mapGuideDetails = ({
  componentData,
  pageData,
}: {
  componentData: UiGuideDetails;
  pageData: Guide;
}): UiGuideDetailsProps => {
  return {
    __typename: componentData.__typename,
    title: componentData.title,
    description: pageData.description,
    publishedDate: pageData.publishedDate,
    chapters: pageData.chapters.items.map((chapter) => ({
      contentHtml: chapter.content.html,
      chapterName: chapter.chapterName,
    })),
  };
};
