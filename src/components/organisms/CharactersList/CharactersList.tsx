import { Wrapper, CharacterListItem } from "./CharactersList.style";
import { useRouter } from "next/router";

const CharactersList = ({ characters = [] }) => {
  console.log("characters", characters);
  const router = useRouter();

  return (
    <Wrapper>
      {characters.map(({ id, name, homeworld, filmConnection }) => (
        <CharacterListItem
          key={id}
          onClick={() => {
            router.push(`/characters/character/${id}`);
          }}
        >
          <h3>{name}</h3>
          <p>{homeworld?.name || ""}</p>
        </CharacterListItem>
      ))}
    </Wrapper>
  );
};

export default CharactersList;
