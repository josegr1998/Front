import { Items } from '@/network/types/common';

type DictionaryItem = Record<string, string>;

export const buildDictionary = <T extends DictionaryItem, K>(
  dictionary: T[]
) => {
  const getDictionaryItem = (key: string) => {
    return dictionary.find(item => item.key === key)?.value;
  };

  return getDictionaryItem as (key: K) => string | undefined;
};

type MappedDictionary<K> = {
  key: K;
  value: string;
};

type RawDictionaryItem = {
  _system_: {
    codename: string;
  };
  text: string;
};

type RawDictionary = Items<RawDictionaryItem>;

export const mapDictionary = <T extends RawDictionary, K>(
  dictionary: T
): MappedDictionary<K>[] => {
  return dictionary.items.map(item => ({
    key: item._system_.codename as K,
    value: item.text,
  }));
};
