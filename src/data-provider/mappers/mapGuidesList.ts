import {
  UiGuideListDictionary,
  UiGuidesList,
} from "../../network/types/UiGuideList";
import {
  DictionaryItem,
  UiGuidesListProps,
  Guide as MappedGuide,
} from "@/ui/components/UiGuidesList/UiGuidesList.types";
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

export const mapGuides = (guides: Guide[]): MappedGuide[] => {
  return guides.map((guide) => ({
    title: guide.title,
    publishedDate: guide.publishedDate,
    description: guide.description.html,
    slug: guide.slug,
  }));
};

const mapDictionary = (dictionary: UiGuideListDictionary): DictionaryItem[] => {
  return dictionary.items.map((item) => ({
    key: item._system_.codename,
    value: item.text,
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
    dictionary: mapDictionary(componentData.dictionary),
  };
};
