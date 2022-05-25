import React from "react";
import { gql } from "@apollo/client";
import { client } from "apollo/client";

const Character = ({ data }) => {
  const { name, homeworld } = data.person;
  return (
    <ul>
      {name ? <li>Name: {name}</li> : null}
      {homeworld?.planetName ? (
        <li>Planet name: {homeworld.planetName}</li>
      ) : null}
    </ul>
  );
};

export const getStaticPaths = async () => {
  const ALL_CHARACTERS = gql`
    query AllCharacters {
      allCharacters: allPeople {
        people {
          id
        }
      }
    }
  `;

  const res = await client.query({
    query: ALL_CHARACTERS,
  });

  const paths = res.data.allCharacters.people.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const CHARACTER = gql`
    query character($id: ID) {
      person(id: $id) {
        name
        id
        homeworld {
          planetName: name
        }
      }
    }
  `;

  const res = await client.query({
    query: CHARACTER,
    variables: { id },
  });

  return { props: { data: res.data } };
};

export default Character;
