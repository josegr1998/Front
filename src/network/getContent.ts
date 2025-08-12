import { client } from "./apollo-server";
import { DocumentNode } from "graphql";

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

export const getContent = async ({ query, context }: Props) => {
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
