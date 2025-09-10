import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { getContent } from "@/network/getContent";
import { GuideResponse } from "@/network/types/guide";
import { createUrl, getCacheOptions } from "./utils";
import { createGuidePageQuery } from "@/graphql/queries/guidePage";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

export const getGuidePage = async ({ slug }: Props): Promise<UiPage> => {
  const isPreview = process.env.IS_PREVIEW?.toLowerCase() === "true";
  console.log("what the actual fuck --->", isPreview);
  const url = createUrl({ isPreview });
  const cacheOptions = getCacheOptions({ isPreview });

  console.log("what --->", cacheOptions);

  const guidePageResponse = await getContent<GuideResponse>({
    query: createGuidePageQuery(slug),
    url,
    ...cacheOptions,
  });

  if (!guidePageResponse.guide_All.items.length) notFound();

  const guidePage = guidePageResponse.guide_All.items[0];

  const pageComponents = guidePage.components.items;
  const pageTitle = guidePage.title;

  const mappedComponents = mapComponents({
    components: pageComponents,
    contextData: guidePage,
  });

  return {
    title: pageTitle,
    components: mappedComponents,
  };
};
