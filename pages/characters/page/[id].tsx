import CharactersList from "src/components/organisms/CharactersList/CharactersList";
import Pagination from "src/components/molecules/Pagination/Pagination";
import { Wrapper } from "./page.style";
import { gql } from "@apollo/client";
import { client } from "apollo/client";
import { chunk } from "helpers/arrays";

const itemsPerPage = 8;

const Characters = ({ data }) => {
  const { characters, lastPage } = data || {};
  return (
    <Wrapper>
      <CharactersList characters={characters} />
      <Pagination lastPage={lastPage} />
    </Wrapper>
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
