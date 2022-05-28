import { client } from "src/apollo/client";

export const fetchGraphQLData = async (QUERY, variables = {}) => {
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
