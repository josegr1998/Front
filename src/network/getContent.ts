import { client } from "./apollo-server";
import { DocumentNode } from "graphql";
import { PageResponse } from "./types/page";

type Props = {
  query: DocumentNode;
  context: {
    headers: {
      Authorization: string;
    };
  };
  fetchPolicy?: "cache-first" | "cache-only" | "no-cache" | "network-only";
};

export const getContent = async ({
  query,
  context,
  fetchPolicy = "cache-first",
}: Props): Promise<PageResponse> => {
  try {
    const { data } = (await client.query({
      query,
      context,
      fetchPolicy,
    })) as { data: PageResponse };

    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};
