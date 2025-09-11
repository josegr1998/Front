export const SYSTEM_FRAGMENT = `
  fragment System on  _ContentTypeSys{
    codename
  }
`;

export const SYSTEM_FRAGMENT_DEFINITION = {
  name: 'System',
  fragment: SYSTEM_FRAGMENT,
};
