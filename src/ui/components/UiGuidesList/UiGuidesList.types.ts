import { ComponentType } from "@/network/types/common";

export type Guide = {
  title: string;
  publishedDate: string;
  summary: string;
  slug: string;
};

export type DictionaryKeys =
  | "dictionary_item__guide"
  | "dictionary_item___available"
  | "dictionary_item___read_guide";

export type DictionaryItem = {
  key: DictionaryKeys;
  value: string;
};

export type Dictionary = DictionaryItem[];

export type UiGuidesListProps = {
  title: string;
  guides: Guide[];
  itemsPerPage: number;
  dictionary: DictionaryItem[];
  __typename: ComponentType;
};
