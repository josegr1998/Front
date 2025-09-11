import { DictionaryKeys } from '@/ui/components/UiGuideDetails/UiGuideDetails.types';
import { Component, Items, TypeInfo, System } from './common';

export type DictionaryItem = {
  _system_: System<DictionaryKeys>;
  text: string;
};

type VariantKeys = 'v1' | 'v2';

type Variant = {
  _system_: System<VariantKeys>;
  codename: string;
};

export type UiGuideDetailsDictionary = Items<DictionaryItem>;

export type UiGuideDetails = {
  itemsPerPage: number;
  title: string;
  dictionary: UiGuideDetailsDictionary;
  _system_: TypeInfo;
  variant: Items<Variant>;
} & Component;
