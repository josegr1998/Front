export const MULTIPLE_CHOICE_FRAGMENT = `
  fragment MultipleChoice on _MultipleChoiceOptionSys {
    codename
  }
`;

export const MULTIPLE_CHOICE_FRAGMENT_DEFINITION = {
  name: "MultipleChoice",
  fragment: MULTIPLE_CHOICE_FRAGMENT,
};
