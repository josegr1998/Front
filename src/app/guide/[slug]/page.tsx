import { RenderComponents } from "@/ui/components/RenderComponents/RenderComponents";
import { getPage } from "@/network/services/getGuidePage";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const data = await getPage(slug);

  return (
    <div>
      <RenderComponents components={data.components} />
    </div>
  );
}
