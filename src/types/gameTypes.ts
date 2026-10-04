export type PokemonSpecies = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  types: string[];
  image: string;
};

export type EnemyPokemon = {
  name: string;
  types: string[];
  image: string;
  defeatetBy: string[],
  notDefeatedBy: string[],
};

export type PokeType = {
  slot: number;
  type: { name: string; url: string };
};

export type DamageRelations = {
  type: string;
  doubleDamageFrom: string[];
};