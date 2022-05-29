export type CharacterType = {
  person: {
    name: string;
    id: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: number;
    mass: number;
  };
  error?: string;
};

export type AllCharacterTypeID = {
  allCharacters: {
    people: { id: string }[];
  };
  error?: string;
};

export type PlanetDataType = {
  person: {
    homeworld: {
      name: string;
      population: string;
      terrains: string[];
      climates: string[];
      diameter: number;
      surfaceWater: number;
      gravity: string;
    };
  };
  error?: string;
};

export type AllCharactersType = {
  allCharacters: {
    people: {
      id: string;
      name: string;
      homeworld: {
        name: string;
      };
    }[];
  };
  error?: string;
};

export type TotalCountTypes = {
  allCharacters: {
    totalCount: number;
  };
};
