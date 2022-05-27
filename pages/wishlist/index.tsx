import { useDispatch, useSelector } from "react-redux";
import { CharacterWrapper } from "src/assets/styles/CharacterWrapper.style";
import { Wrapper, CharacterCard, StyledH2 } from "./wishlist.style";
import { Button } from "src/components/atoms/Button/Button";
import { useRouter } from "next/router";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const router = useRouter();

  const allCharacters = Object.values(wishlist);

  return (
    <>
      <StyledH2>
        {!!!allCharacters.length
          ? "List is empty!"
          : "Your favorite characters:"}
      </StyledH2>
      <Wrapper>
        {allCharacters.length
          ? allCharacters.map(({ name, id }) => (
              <CharacterCard key={id}>
                <CharacterWrapper
                  as="button"
                  onClick={() => {
                    router.push(`/characters/character/${id}`);
                  }}
                >
                  <h2>{name}</h2>
                </CharacterWrapper>
                <Button
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_WISHLIST", value: id });
                  }}
                >
                  Remove
                </Button>
              </CharacterCard>
            ))
          : null}
      </Wrapper>
    </>
  );
};

export default Wishlist;
