import { getHomePage } from "@/network/services/getHomePage";

export default async function Home() {
  const data = await getHomePage();

  const homePage = data?.page_All?.items?.[0];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Home
      </main>
    </div>
  );
}
