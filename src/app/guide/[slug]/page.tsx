import { RenderComponents } from "@/ui/components/RenderComponents/RenderComponents";
import { getGuidePage } from "@/data-provider/pageService/getGuidePage";
import { createGuidePageQuery } from "@/graphql/queries/guidePage";
import { getContent } from "@/network/getContent";
import { GuideResponse } from "@/network/types/page";
import { GUIDES_QUERY } from "@/graphql/queries/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const isPreview = process.env.IS_PREVIEW === "true";
  const fetchPolicy = isPreview ? "no-cache" : "cache-first";

  const guides = await getContent<GuideResponse>({
    query: GUIDES_QUERY,
    context: {
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
      },
    },
    fetchPolicy,
  });

  return guides.guide_All.items.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  const data = await getGuidePage({ query: createGuidePageQuery(slug) });

  return (
    <div>
      <RenderComponents components={data.components} />
    </div>
  );
}
