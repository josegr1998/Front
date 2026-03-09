export const DICTIONARY_FRAGMENT = `
  fragment DictionaryItem on DictionaryItem {
      _system_ {
        codename
      }
      text
  }
`;

export const DICTIONARY_FRAGMENT_DEFINITION = {
  name: "DictionaryItem",
  fragment: DICTIONARY_FRAGMENT,
};
