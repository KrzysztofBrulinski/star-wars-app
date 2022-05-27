import { Wrapper } from "./CharactersList.style";
import CharactersListItem from "src/components/molecules/CharacterListItem/CharacterListItem";
import { useSelector } from "react-redux";

const CharactersList = ({ characters }) => {
  const wishlist = useSelector(
    (state: { wishlist: Array<Object> }) => state.wishlist
  );
  return (
    <>
      {!!!characters.length ? <h2>No characters found...</h2> : null}
      <Wrapper>
        {characters.map(({ id, name, homeworld }) => (
          <CharactersListItem
            key={id}
            id={id}
            name={name}
            homeworld={homeworld}
            wishlist={wishlist}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default CharactersList;
