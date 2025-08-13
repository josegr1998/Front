import {
  UiGuideListDictionary,
  UiGuidesList,
} from "../../network/types/UiGuideList";
import {
  DictionaryItem,
  UiGuidesListProps,
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

  return {
    __typename: componentData.__typename,
    title: componentData.title,
    guides: sortedGuides,
    itemsPerPage: componentData.itemsPerPage,
    dictionary: mapDictionary(componentData.dictionary),
  };
};
