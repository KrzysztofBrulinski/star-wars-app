import { gql } from "@apollo/client";

export const CHARACTER = gql`
  query character($id: ID) {
    person(id: $id) {
      name
      id
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
    }
  }
`;

export const ALL_CHARACTERS_ID = gql`
  query AllCharactersID {
    allCharacters: allPeople {
      people {
        id
      }
    }
  }
`;

export const PLANET_DATA = gql`
  query planetData($id: ID) {
    person(id: $id) {
      homeworld {
        name
        climates
        terrains
        diameter
        gravity
        population
        surfaceWater
      }
    }
  }
`;

export const ALL_CHARACTERS = gql`
  query AllCharacters {
    allCharacters: allPeople {
      people {
        id
        name
        homeworld {
          name
        }
      }
    }
  }
`;

export const TOTAL_COUNT = gql`
  query AllCharacters {
    allCharacters: allPeople {
      totalCount
    }
  }
`;
