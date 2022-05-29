import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_SWAPI_URL = "http://localhost:52025";

export const client = new ApolloClient({
  uri: GRAPHQL_SWAPI_URL,
  cache: new InMemoryCache(),
});
