import { RenderComponents } from "@/components/RenderComponents/RenderComponents";
import { getPage } from "@/network/getPage";

export default async function GuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const data = await getPage(slug);

  const components = data.page_All.items[0].components.items;

  return (
    <div>
      <RenderComponents components={components} />
    </div>
  );
}
