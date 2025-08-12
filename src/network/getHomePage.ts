import { getClient } from "@/lib/apollo-server";
import { HOME_PAGE_QUERY } from "@/graphql/queries/homepage";
import { HomePageQueryResult } from "@/types/graphql";

export const getHomePage = async (): Promise<HomePageQueryResult> => {
  const client = getClient();

  try {
    const { data } = await client.query({
      query: HOME_PAGE_QUERY,
      context: {
        fetchOptions: {
          next: { revalidate: 3600 }, // Cache for 1 hour
        },
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
