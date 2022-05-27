import CharactersList from "src/components/organisms/CharactersList/CharactersList";
import Pagination from "src/components/molecules/Pagination/Pagination";
import Filters from "src/components/organisms/Filters/Filters";
import SearchBar from "src/components/molecules/SearchBar/SearchBar";
import { Wrapper, Listing } from "./page.style";
import { client } from "src/apollo/client";
import { chunk, sortFunc } from "src/helpers/arrays";
import { useEffect, useState } from "react";
import { fetchGraphQLData } from "src/apollo/utils";
import { ALL_CHARACTERS, TOTAL_COUNT } from "src/GraphQL/queries";

const itemsPerPage = 16;

const Characters = ({ data }) => {
  const { characters, lastPage, planetFilter } = data || {};

  const [results, setResults] = useState(characters);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filter, setFilter] = useState(planetFilter);

  // set default values
  useEffect(() => {
    setResults(characters);
    setSearchPhrase("");
    setFilter(planetFilter);
  }, [data]);

  useEffect(() => {
    let result = characters;

    if (searchPhrase) {
      result = characters.filter(
        (character: { name: String }) =>
          character.name.toLowerCase().indexOf(searchPhrase.toLowerCase()) >= 0
      );
    }

    if (!!filter.find((item) => item.isChecked)) {
      result = result.filter(
        ({ homeworld }) =>
          !!filter.find(
            ({ planetName, isChecked }) =>
              homeworld.name === planetName && isChecked
          )
      );
    }

    setResults(result);
  }, [searchPhrase, filter]);

  return (
    <Listing>
      <Filters filter={filter} setFilter={setFilter} />
      <Wrapper>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
        <CharactersList characters={results} />
        <Pagination lastPage={lastPage} />
      </Wrapper>
    </Listing>
  );
};

export const getStaticPaths = async () => {
  const res = await client.query({
    query: TOTAL_COUNT,
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
  const data = await fetchGraphQLData(ALL_CHARACTERS);

  const allPagesData = chunk(data.allCharacters?.people, itemsPerPage);
  const charactersForPage = allPagesData?.[id - 1] || [];

  const planetFilter = [
    ...new Set(charactersForPage?.map(({ homeworld }) => homeworld.name)),
  ]
    .sort(sortFunc)
    .map((planetName) => ({
      planetName,
      isChecked: false,
    }));

  return {
    props: {
      data: {
        characters: charactersForPage,
        lastPage: allPagesData.length,
        planetFilter,
      },
    },
  };
};

export default Characters;
