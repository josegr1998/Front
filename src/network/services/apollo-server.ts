import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: `https://graphql.kontent.ai/${process.env.KONTENT_PROJECT_ID}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export { client };
