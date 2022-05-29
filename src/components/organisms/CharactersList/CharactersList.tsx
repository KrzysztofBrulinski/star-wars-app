import { Wrapper } from "./CharactersList.style";
import CharactersListItem from "src/components/molecules/CharacterListItem/CharacterListItem";
import { useSelector } from "react-redux";
import { StateTypes } from "src/store/reducers/reducers";

type Props = {
  characters: {
    id: string;
    name: string;
    homeworld: { name: string };
  }[];
};

const CharactersList = ({ characters }: Props) => {
  const wishlist = useSelector((state: StateTypes) => state.wishlist);
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
