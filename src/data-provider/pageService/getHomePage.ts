import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { getContent } from "@/network/getContent";
import { GuideResponse } from "@/network/types/guide";
import { PageResponse } from "@/network/types/page";
import { GUIDES_QUERY } from "@/graphql/queries/guides";
import { HOME_PAGE_QUERY } from "@/graphql/queries/homepage";
import { createUrl, getCacheOptions } from "./utils";

export const getHomePage = async (): Promise<UiPage> => {
  const isPreview = process.env.IS_PREVIEW?.toLowerCase() === "true";

  const url = createUrl({ isPreview });

  const cacheOptions = getCacheOptions({ isPreview });

  const homePageResponse = await getContent<PageResponse>({
    query: HOME_PAGE_QUERY,
    url,
    ...cacheOptions,
  });

  const guidesListResponse = await getContent<GuideResponse>({
    query: GUIDES_QUERY,
    url,
    ...cacheOptions,
  });

  const guides = guidesListResponse.guide_All.items;

  const components = homePageResponse.page_All.items[0].components.items;

  const title = homePageResponse.page_All.items[0].title;

  const mappedComponents = mapComponents({
    components,
    contextData: { guides },
  });

  return {
    title,
    components: mappedComponents,
  };
};
