import { Wrapper } from "./CharacterListItem.style";
import { CharacterTile } from "src/assets/styles/CharacterTail.style";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { StyledHeartButton as HeartButton } from "src/components/atoms/HeartButton/HeartButton.style";

const CharactersListItem = ({ id, name, homeworld, wishlist }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isInWishlist = !!wishlist[id];
  const action = isInWishlist
    ? { type: "REMOVE_FROM_WISHLIST", id }
    : {
        type: "ADD_TO_WISHLIST",
        value: { [id]: { name, id } },
      };

  return (
    <Wrapper>
      <CharacterTile
        as="button"
        onClick={() => {
          router.push(`/characters/character/${id}`);
        }}
      >
        <h2>{name}</h2>
        <p>from {homeworld?.name || ""}</p>
      </CharacterTile>

      <HeartButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(action);
        }}
        isActive={isInWishlist}
      />
    </Wrapper>
  );
};

export default CharactersListItem;
