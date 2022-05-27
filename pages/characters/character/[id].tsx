import { Wrapper, StyledList } from "./character.style";
import { Button } from "src/components/atoms/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "src/components/molecules/Modal/Modal";
import { StyledHeartButton as HeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import { fetchGraphQLData } from "src/apollo/utils";
import { PLANET_DATA, CHARACTER, ALL_CHARACTERS_ID } from "src/GraphQL/queries";

const Character = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const { name, id, birthYear, height, mass, eyeColor, hairColor, gender } =
    data?.person || {};

  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const isInWishlist = !!wishlist[id];
  const action = isInWishlist
    ? { type: "REMOVE_FROM_WISHLIST", value: id }
    : {
        type: "ADD_TO_WISHLIST",
        value: { [id]: { name, id } },
      };

  const characterDataSchema = [
    { name: "Name", value: name || "n/a" },
    { name: "Birth year", value: birthYear || "n/a" },
    { name: "Height", value: height || "n/a" },
    { name: "Mass", value: mass || "n/a" },
    { name: "Eye color", value: eyeColor || "n/a" },
    { name: "Hair color", value: hairColor || "n/a" },
    { name: "Gender", value: gender || "n/a" },
  ];

  const planetsDataSchema = [
    { name: "Name", value: modalData.name || "n/a" },
    { name: "Population", value: modalData.population || "n/a" },
    { name: "Terrains", value: modalData.terrains?.join(", ") || "n/a" },
    { name: "Climates", value: modalData.climates?.join(", ") || "n/a" },
    { name: "Diameter", value: modalData.diameter || "n/a" },
    { name: "Surface water", value: modalData.surfaceWater || "n/a" },
    { name: "Gravity", value: modalData.gravity || "n/a" },
  ];

  return (
    <>
      <Modal
        headerText={"Planet info"}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        {!!Object.keys(modalData)?.length ? (
          <StyledList>
            {planetsDataSchema.map(({ name, value }) => (
              <li key={name}>
                {name}: <b>{value}</b>
              </li>
            ))}
          </StyledList>
        ) : null}
      </Modal>

      <Wrapper>
        <HeartButton
          isSmall
          onClick={() => {
            dispatch(action);
          }}
          isActive={isInWishlist}
        />
        <StyledList>
          {characterDataSchema.map(({ name, value }) => (
            <li key={name}>
              {name}: <b>{value}</b>
            </li>
          ))}
        </StyledList>
        <Button
          onClick={async () => {
            setShowModal(true);
            const data = await fetchGraphQLData(PLANET_DATA, { id });
            setModalData(data?.person?.homeworld || {});
          }}
        >
          About planet
        </Button>
      </Wrapper>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await fetchGraphQLData(ALL_CHARACTERS_ID);
  const paths =
    data.allCharacters?.people?.map(({ id }) => ({
      params: { id },
    })) || [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetchGraphQLData(CHARACTER, { id });

  return { props: { data } };
};

export default Character;
