import { getGuidePageQuery } from "@/graphql/queries/guidePage";
import { getClient } from "@/lib/apollo-server";
import { GuidePageQueryResult } from "@/types/graphql";

export const getPage = async (slug: string): Promise<GuidePageQueryResult> => {
  //TODO deduplicate client creation
  const client = getClient();
  const { data } = await client.query({
    query: getGuidePageQuery(slug),
  });

  return data;
};
