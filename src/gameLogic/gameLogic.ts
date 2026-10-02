import type { Pokemon } from "../types/gameTypes";

// ze array o pokemonech vezme všechny unikátní typy do nové array
export function getUniqueTypes(pokemonArray: Pokemon[]) {
  return [...new Set(
    pokemonArray.flatMap((pokemon) => pokemon.types)
  )];
}