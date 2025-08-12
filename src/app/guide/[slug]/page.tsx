import { RenderComponents } from "@/ui/components/RenderComponents/RenderComponents";
import { getGuidePage } from "@/data-provider/pageService/getGuidePage";
import { createGuidePageQuery } from "@/graphql/queries/guidePage";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  const data = await getGuidePage({ query: createGuidePageQuery(slug) });

  return (
    <div>
      <RenderComponents components={data.components} />
    </div>
  );
}
