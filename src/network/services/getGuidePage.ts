import { getGuidePageQuery } from "@/graphql/queries/guidePage";
import { client } from "@/network/services/apollo-server";
import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";

export const getPage = async (slug: string): Promise<UiPage> => {
  const { data } = await client.query({
    query: getGuidePageQuery(slug),
  });
  const components = data.page_All.items[0].components.items;

  const title = data.page_All.items[0].title;

  const mappedComponents = mapComponents(components);

  return {
    title,
    components: mappedComponents,
  };
};
