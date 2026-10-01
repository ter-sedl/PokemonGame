export type Pokemon = {
  name: string;
  types: string[];
  image: string;
};

export type PokeType = {
    slot: number;
    type: {name: string; url: string}
};
