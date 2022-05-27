import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:52025",
  cache: new InMemoryCache(),
});
