import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl4x3t0vp04sc01tdez40719q/master",

  cache: new InMemoryCache(),
});
