import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { getContentV2 } from "@/network/getContent";
import { GuideResponse } from "@/network/types/page";
import { GUIDES_QUERY } from "@/graphql/queries/guides";
import { GuideListPageData } from "../mappers/mapGuidesList";
import { HOME_PAGE_QUERY } from "@/graphql/queries/homepage";

type Props = {
  query: string;
};

export const getPage = async ({ query }: Props): Promise<UiPage> => {
  const response = await fetch(
    `https://preview-graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`,
    {
      method: "POST",
      body: JSON.stringify({
        query: HOME_PAGE_QUERY,
      }),
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await response.json();

  const guides = await getContentV2<GuideResponse>({
    query: GUIDES_QUERY,
  });

  const pageData = {
    guides: guides.guide_All.items,
  } as const satisfies GuideListPageData;

  const components = data.page_All.items[0].components.items;
  const title = data.page_All.items[0].title;

  const mappedComponents = mapComponents({ components, pageData });

  return {
    title,
    components: mappedComponents,
  };
};
