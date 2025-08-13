type DictionaryItem = Record<string, string>;

export const buildDictionary = <T extends DictionaryItem, K>(
  dictionary: T[]
) => {
  const getDictionaryItem = (key: string) => {
    return dictionary.find((item) => item.key === key)?.value;
  };

  return getDictionaryItem as (key: K) => string | undefined;
};
