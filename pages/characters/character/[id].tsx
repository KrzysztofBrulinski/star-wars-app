import { Wrapper, StyledList } from "./character.style";
import { Button } from "src/components/atoms/Button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "src/components/molecules/Modal/Modal";
import { StyledHeartButton as HeartButton } from "src/components/atoms/HeartButton/HeartButton.style";
import { fetchGraphQLData } from "src/apollo/utils";
import { PLANET_DATA, CHARACTER, ALL_CHARACTERS_ID } from "src/GraphQL/queries";
import { CharacterWrapper } from "src/assets/styles/GlobalStyledComponent/CharacterWrapper.style";
import { StateTypes } from "src/store/reducers/reducers";
import { GetStaticProps } from "next";
import {
  CharacterType,
  AllCharacterTypeID,
  PlanetDataType,
} from "src/GraphQL/queries.types";

const initialModalState = {
  name: "",
  population: "",
  terrains: [],
  climates: [],
  diameter: 0,
  surfaceWater: 0,
  gravity: "",
};

type Props = { data: CharacterType };

const Character = ({ data }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(initialModalState);
  const { name, id, birthYear, height, mass, eyeColor, hairColor, gender } =
    data?.person || {};
  const error = data.error;
  const wishlist = useSelector((state: StateTypes) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch({
        type: "SET_ALERT",
        value: {
          text: error,
          color: "darkRed",
          id: new Date().getTime() + "",
        },
      });
    }
  }, []);

  const isInWishlist = !!wishlist.find((el) => el.id === id);
  const action = isInWishlist
    ? { type: "REMOVE_FROM_WISHLIST", value: id }
    : {
        type: "ADD_TO_WISHLIST",
        value: { name, id },
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
    <Wrapper>
      <Modal
        headerText={"Planet info"}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <StyledList>
          {planetsDataSchema.map(({ name, value }) => (
            <li key={name}>
              {name}: <b>{value}</b>
            </li>
          ))}
        </StyledList>
      </Modal>

      <CharacterWrapper>
        {!error ? (
          <HeartButton
            isSmall
            onClick={() => {
              dispatch(action);
            }}
            isActive={isInWishlist}
          />
        ) : null}
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
            const data: PlanetDataType = await fetchGraphQLData(PLANET_DATA, {
              id,
            });
            if (data.error) {
              dispatch({
                type: "SET_ALERT",
                value: {
                  text: data.error,
                  color: "darkRed",
                  id: new Date().getTime() + "",
                },
              });
            }

            setModalData(data?.person?.homeworld || initialModalState);
          }}
        >
          About planet
        </Button>
      </CharacterWrapper>
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const data: AllCharacterTypeID = await fetchGraphQLData(ALL_CHARACTERS_ID);

  const paths =
    data?.allCharacters?.people?.map(({ id }) => ({
      params: { id },
    })) || [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const data: CharacterType = await fetchGraphQLData(CHARACTER, { id });

  return { props: { data } };
};

export default Character;
