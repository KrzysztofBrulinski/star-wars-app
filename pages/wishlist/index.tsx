import { useDispatch, useSelector } from "react-redux";
import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";
import { Wrapper, CharacterCard, StyledH2 } from "./wishlist.style";
import { Button } from "src/components/atoms/Button/Button";
import { useRouter } from "next/router";
import { StateTypes } from "src/store/reducers/reducers";

const Wishlist = () => {
  const wishlist = useSelector((state: StateTypes) => state.wishlist);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <StyledH2>
        {!!!wishlist.length ? "List is empty!" : "Your favorite characters:"}
      </StyledH2>
      <Wrapper>
        {wishlist.length
          ? wishlist.map(({ name, id }, index) => (
              <CharacterCard key={id || index}>
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
