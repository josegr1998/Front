import { DictionaryKeys } from '@/ui/components/UiGuidesList/UiGuidesList.types';
import { Component, Items, System, TypeInfo } from './common';
import { Guide } from './guide';

type SortType = 'newest_to_oldest' | 'oldest_to_newest';

export type ListOrderItem = {
  _system_: System<SortType>;
};

type DictionaryItem = {
  _system_: System<DictionaryKeys>;
  text: string;
};

export type UiGuideListDictionary = Items<DictionaryItem>;

export type UiGuidesList = {
  itemsPerPage: number;
  title: string;
  _system_: TypeInfo;
  listOrder: {
    items: ListOrderItem[];
  };
  dictionary: UiGuideListDictionary;
} & Component;

export type GuideListResponse = {
  guide_All: {
    items: Guide[];
  };
};
