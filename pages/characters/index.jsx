import React from "react";
import { MainWrapper, CharacterCard } from "./index.style";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const ALL_CHARACTERS = gql`
  query AllCharacters(
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    allCharacters: allPeople(
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      people {
        id
        name
        homeworld {
          name
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
`;

const Characters = () => {
  const router = useRouter();
  const { page = 0 } = router.query;
  const currentPage = Number.parseInt(page) || 1;
  const itemsPerPage = 2;
  const stateCursor = useSelector((state) => state.cursor);
  const dispatch = useDispatch();

  // const variables = !!Object.keys(stateCursor).length
  //   ? stateCursor
  //   : { first: itemsPerPage };

  const { data, loading, error } = useQuery(ALL_CHARACTERS, {
    variables: { first: 2 },
  });

  console.log("DATA", data);
  console.log("stateCursor", stateCursor);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { allCharacters } = data || {};

  const { endCursor, startCursor, hasNextPage, hasPreviousPage } =
    allCharacters?.pageInfo || {};
  const starWarsCharacters = allCharacters?.people || [];

  console.log({ hasNextPage, hasPreviousPage });

  return (
    <MainWrapper>
      {starWarsCharacters.map(({ id, name, homeworld }) => (
        <CharacterCard
          key={id}
          onClick={() => {
            router.push(`/characters/character/${id}`);
          }}
        >
          <h3>{name}</h3>
          <p>{homeworld?.name || ""}</p>
        </CharacterCard>
      ))}

      <button
        onClick={() => {
          dispatch({
            type: "CURSOR",
            cursor: {
              query: "prev",
              variables: { last: itemsPerPage, before: startCursor },
            },
          });
          router.push({
            query: { page: currentPage - 1 },
          });
        }}
      >
        Prev page
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "CURSOR",
            cursor: {
              query: "next",
              variables: { first: itemsPerPage, after: endCursor },
            },
          });
          router.push({ query: { page: currentPage + 1 } });
        }}
      >
        Next page
      </button>
    </MainWrapper>
  );
};

export default Characters;
