import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { DocumentNode } from "graphql";
import { getContent } from "@/network/getContent";
import { CACHE_REVALIDATE_TIME } from "../consts";

type Props = {
  query: DocumentNode;
};

export const getPage = async ({ query }: Props): Promise<UiPage> => {
  const data = await getContent({
    query,
    context: {
      fetchOptions: {
        next: {
          revalidate: CACHE_REVALIDATE_TIME,
        },
      },
    },
  });

  const components = data.page_All.items[0].components.items;

  const title = data.page_All.items[0].title;

  const mappedComponents = mapComponents(components);

  return {
    title,
    components: mappedComponents,
  };
};
