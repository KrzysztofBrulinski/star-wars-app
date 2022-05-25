import React from "react";
import { gql } from "@apollo/client";
import { client } from "apollo/client";
import { chunk } from "helpers/arrays";
import { useRouter } from "next/router";
import CharactersList from "src/components/organisms/CharactersList/CharactersList";

const itemsPerPage = 4;

const Characters = ({ data }) => {
  const router = useRouter();
  const currentPage = Number.parseInt(router.query.id);

  const { characters, lastPage } = data || {};
  return (
    <>
      <CharactersList characters={characters} />
      <button
        disabled={currentPage === 1}
        onClick={() => {
          router.push({
            query: { id: currentPage - 1 },
          });
        }}
      >
        Previous page
      </button>
      <button
        disabled={currentPage === lastPage}
        onClick={() => {
          router.push({ query: { id: currentPage + 1 } });
        }}
      >
        Next page
      </button>
    </>
  );
};

export const getStaticPaths = async () => {
  const ALL_CHARACTERS = gql`
    query AllCharacters {
      allCharacters: allPeople {
        totalCount
      }
    }
  `;

  const res = await client.query({
    query: ALL_CHARACTERS,
  });

  const allPagesLength = Math.ceil(
    res.data.allCharacters.totalCount / itemsPerPage
  );
  const paths = Array.from({ length: allPagesLength }, (_, i) => ({
    params: { id: i + 1 + "" },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const ALL_CHARACTERS = gql`
    query AllCharacters {
      allCharacters: allPeople {
        people {
          id
          name
          filmConnection {
            films {
              title
            }
          }
          homeworld {
            name
          }
        }
      }
    }
  `;

  const res = await client.query({
    query: ALL_CHARACTERS,
  });

  const allPagesData = chunk(res.data.allCharacters.people, itemsPerPage);

  return {
    props: {
      data: { characters: allPagesData[id - 1], lastPage: allPagesData.length },
    },
  };
};

export default Characters;
