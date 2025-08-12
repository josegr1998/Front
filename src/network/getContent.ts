import { client } from "./apollo-server";
import { DocumentNode } from "graphql";
import { PageResponse } from "./types/page";

type Props = {
  query: DocumentNode;
  context: {
    fetchOptions: {
      next: {
        revalidate: number;
      };
    };
  };
};

export const getContent = async ({
  query,
  context,
}: Props): Promise<PageResponse> => {
  try {
    const { data } = await client.query({
      query,
      context,
    });

    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};
