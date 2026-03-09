import { GUIDE_FRAGMENT_DEFINITION } from "../fragments/guide";

export const GUIDE_PAGE_QUERY = (slug: string) => `
  query MyQuery {
    guide_All(where: { slug: { eq: "${slug}" } }) {
      items {
        ...${GUIDE_FRAGMENT_DEFINITION.name}
      }
    }
  }

  ${GUIDE_FRAGMENT_DEFINITION.fragment}
  ${GUIDE_FRAGMENT_DEFINITION.dependencies.join("\n")}
`;
export const createGuidePageQuery = (slug: string) => {
  return GUIDE_PAGE_QUERY(slug);
};
