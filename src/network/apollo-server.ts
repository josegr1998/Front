import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const createUrl = () => {
  const url =
    process.env.IS_PREVIEW === "true"
      ? `https://preview-graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`
      : `https://graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`;

  return url;
};

const httpLink = createHttpLink({
  uri: createUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  defaultOptions: {
    query: {
      fetchPolicy:
        process.env.IS_PREVIEW === "true" ? "no-cache" : "cache-first",
    },
  },
});

export { client };
