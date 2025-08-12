import { getPage } from "@/data-provider/pageService/getPage";
import { HOME_PAGE_QUERY } from "@/graphql/queries/homepage";
import { RenderComponents } from "@/ui/components/RenderComponents/RenderComponents";

export default async function Home() {
  const data = await getPage({ query: HOME_PAGE_QUERY });

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <RenderComponents components={data.components} />
      </main>
    </div>
  );
}
