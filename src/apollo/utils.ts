import { DocumentNode } from "graphql";
import { client } from "src/apollo/client";

export const fetchGraphQLData = async (
  QUERY: DocumentNode,
  variables = {}
): Promise<any> => {
  try {
    const res = await client.query({
      query: QUERY,
      variables,
    });

    return res.data;
  } catch (e) {
    return { error: "Error: Cannot load data" };
  }
};
