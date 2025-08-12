import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { DocumentNode } from "graphql";
import { getContent } from "@/network/getContent";
import { GuideResponse, PageResponse } from "@/network/types/page";
import { GUIDES_QUERY } from "@/graphql/queries/guides";
import { GuideListPageData } from "../mappers/mapGuidesList";

type Props = {
  query: DocumentNode;
};

export const getPage = async ({ query }: Props): Promise<UiPage> => {
  const isPreview = process.env.IS_PREVIEW === "true";
  const fetchPolicy = isPreview ? "no-cache" : "cache-first";

  const data = await getContent<PageResponse>({
    query,
    context: {
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
      },
    },
    fetchPolicy,
  });

  const guides = await getContent<GuideResponse>({
    query: GUIDES_QUERY,
    context: {
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
      },
    },
    fetchPolicy,
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
