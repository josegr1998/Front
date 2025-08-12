import { client } from "@/network/apollo-server";
import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { DocumentNode } from "graphql";

type Props = {
  query: DocumentNode;
};

export const getPage = async ({ query }: Props): Promise<UiPage> => {
  const { data } = await client.query({
    query,
  });
  const components = data.page_All.items[0].components.items;

  const title = data.page_All.items[0].title;

  const mappedComponents = mapComponents(components);

  return {
    title,
    components: mappedComponents,
  };
};
