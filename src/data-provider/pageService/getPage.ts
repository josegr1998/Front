import { UiPage } from "@/ui/types/common";
import { mapComponents } from "../mappers/mapComponents";
import { DocumentNode } from "graphql";
import { getContent } from "@/network/getContent";

type Props = {
  query: DocumentNode;
};

export const getPage = async ({ query }: Props): Promise<UiPage> => {
  const isPreview = process.env.IS_PREVIEW === "true";
  const fetchPolicy = isPreview ? "no-cache" : "cache-first";

  const data = await getContent({
    query,
    context: {
      headers: {
        Authorization: `Bearer ${process.env.KONTENT_API_KEY}`,
      },
    },
    fetchPolicy,
  });

  const components = data.page_All.items[0].components.items;
  const title = data.page_All.items[0].title;
  const mappedComponents = mapComponents(components);

  return {
    title,
    components: mappedComponents,
  };
};
