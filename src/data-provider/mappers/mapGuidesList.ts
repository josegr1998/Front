import {
  UiGuideListDictionary,
  UiGuidesList,
} from "../../network/types/UiGuideList";
import {
  UiGuidesListProps,
  Guide as MappedGuide,
  DictionaryKeys,
} from "@/ui/components/UiGuidesList/UiGuidesList.types";
import { Guide } from "@/network/types/guide";
import { mapDictionary } from "./utils/dictionary";

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

export const mapGuides = (guides: Guide[]): MappedGuide[] => {
  return guides.map((guide) => ({
    title: guide.title,
    publishedDate: guide.publishedDate,
    summary: guide.sumary,
    slug: guide.slug,
  }));
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

  const mappedGuides = mapGuides(sortedGuides);

  return {
    __typename: componentData.__typename,
    title: componentData.title,
    guides: mappedGuides,
    itemsPerPage: componentData.itemsPerPage,
    dictionary: mapDictionary<UiGuideListDictionary, DictionaryKeys>(
      componentData.dictionary
    ),
  };
};
