import { RenderComponents } from "@/ui/components/RenderComponents/RenderComponents";
import { getGuidePage } from "@/data-provider/pageService/getGuidePage";
import { getContent } from "@/network/getContent";
import { GuideResponse } from "@/network/types/page";
import { GUIDES_QUERY } from "@/graphql/queries/guides";
import { getCacheOptions } from "@/data-provider/pageService/utils";
import { createUrl } from "@/data-provider/pageService/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const isPreview = process.env.IS_PREVIEW?.toLowerCase() === "true";
  const url = createUrl({ isPreview });
  const cacheOptions = getCacheOptions({ isPreview });

  const guides = await getContent<GuideResponse>({
    query: GUIDES_QUERY,
    url,
    ...cacheOptions,
  });

  return guides.guide_All.items.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  const data = await getGuidePage({ slug });

  return (
    <div>
      <RenderComponents components={data.components} />
    </div>
  );
}
