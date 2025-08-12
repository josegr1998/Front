import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { getContentV2 } from "@/network/getContent";
import { Guide, GuideResponse } from "@/network/types/page";

type Props = {
  query: string;
};

export const getGuidePage = async ({ query }: Props): Promise<UiPage> => {
  const data = await getContentV2<GuideResponse>({
    query,
  });

  const components = data.guide_All.items[0].components.items;
  const title = data.guide_All.items[0].title;

  const pageData = {
    chapters: data.guide_All.items[0].chapters,
    title: data.guide_All.items[0].title,
    publishedDate: data.guide_All.items[0].publishedDate,
    description: data.guide_All.items[0].description,
    __typename: data.guide_All.items[0].__typename,
    slug: data.guide_All.items[0].slug,
  } as const satisfies Guide;

  const mappedComponents = mapComponents({ components, pageData });

  return {
    title,
    components: mappedComponents,
  };
};
