import {
  DictionaryItem,
  DictionaryKeys,
  UiGuideDetailsProps,
} from "@/ui/components/UiGuideDetails/UiGuideDetails.types";
import {
  UiGuideDetails,
  UiGuideDetailsDictionary,
} from "../../network/types/UiGuideDetails";
import { Guide } from "@/network/types/page";
import { buildDictionary } from "./utils/dictionary";

export type GuideDetailsPageData = Guide;

const mapDictionary = (
  dictionary: UiGuideDetailsDictionary
): DictionaryItem[] => {
  return dictionary.items.map((item) => ({
    key: item._system_.codename,
    value: item.text,
  }));
};

export const mapGuideDetails = ({
  componentData,
  pageData,
}: {
  componentData: UiGuideDetails;
  pageData: GuideDetailsPageData;
}): UiGuideDetailsProps => {
  const mappedDictionary = mapDictionary(componentData.dictionary);
  const getDictionaryItem = buildDictionary<DictionaryItem, DictionaryKeys>(
    mappedDictionary
  );

  return {
    __typename: componentData.__typename,
    title: pageData.title,
    description: pageData.description.html,
    publishedDate: pageData.publishedDate,
    chapters: pageData.chapters.items.map((chapter) => ({
      contentHtml: chapter.content.html,
      chapterName: chapter.chapterName,
      chapterTitle: chapter.title,
    })),
    labels: {
      tableOfContentsLabel:
        getDictionaryItem("dictionary_item___table_of_contents") || "",
      publishedDateLabel:
        getDictionaryItem("dictionary_item___published") || "",
    },
  };
};
