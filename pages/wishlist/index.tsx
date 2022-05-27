import { useDispatch, useSelector } from "react-redux";
import { CharacterTile } from "src/assets/styles/CharacterTail.style";
import { Wrapper } from "./wishlist.style";
import { Button } from "src/components/atoms/Button/Button";

const Wishlist = () => {
  const wishlist = useSelector(({ wishlist }) => wishlist);
  const dispatch = useDispatch();

  const allCharacters = Object.values(wishlist);

  return (
    <Wrapper>
      {allCharacters.length ? (
        allCharacters.map(({ name, id }) => (
          <CharacterTile key={id}>
            <h2>{name}</h2>
            <Button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_WISHLIST", id });
              }}
            >
              Remove me
            </Button>
          </CharacterTile>
        ))
      ) : (
        <p>List is empty!</p>
      )}
    </Wrapper>
  );
};

export default Wishlist;
