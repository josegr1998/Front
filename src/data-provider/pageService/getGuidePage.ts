import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { getContent } from "@/network/getContent";
import { GuideItemRaw, GuideResponse } from "@/network/types/page";
import { createUrl, getCacheOptions } from "./utils";
import { createGuidePageQuery } from "@/graphql/queries/guidePage";
import { GuideDetailsPageData } from "../mappers/mapGuideDetails";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

const formatPageData = ({
  guide,
}: {
  guide: GuideItemRaw;
}): GuideDetailsPageData => ({
  chapters: guide.chapters,
  title: guide.title,
  publishedDate: guide.publishedDate,
  description: guide.description,
  __typename: guide.__typename,
  sumary: guide.sumary,
  slug: guide.slug,
});

export const getGuidePage = async ({ slug }: Props): Promise<UiPage> => {
  const isPreview = process.env.IS_PREVIEW?.toLowerCase() === "true";

  const url = createUrl({ isPreview });
  const cacheOptions = getCacheOptions({ isPreview });

  const guidePageResponse = await getContent<GuideResponse>({
    query: createGuidePageQuery(slug),
    url,
    ...cacheOptions,
  });

  if (!guidePageResponse.guide_All.items.length) notFound();

  const guidePage = guidePageResponse.guide_All.items[0];

  const pageComponents = guidePage.components.items;
  const pageTitle = guidePage.title;

  const formattedPageData = formatPageData({ guide: guidePage });

  const mappedComponents = mapComponents({
    components: pageComponents,
    pageData: formattedPageData,
  });

  return {
    title: pageTitle,
    components: mappedComponents,
  };
};
