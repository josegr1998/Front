import { getHomePage } from '@/data-provider/pageService/getHomePage';
import { RenderComponents } from '@/ui/components/RenderComponents/RenderComponents';

export const metadata = {
  title: 'Home',
  description: 'Home',
};

export default async function Home() {
  const data = await getHomePage();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <RenderComponents components={data.components} />
      </main>
    </div>
  );
}
