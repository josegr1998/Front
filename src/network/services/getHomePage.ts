import { client } from "@/network/services/apollo-server";
import { HOME_PAGE_QUERY } from "@/graphql/queries/homepage";
import { PageResult } from "@/network/types/page";

export const getHomePage = async (): Promise<PageResult> => {
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
