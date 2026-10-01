//práce s API. Async znamená, že funkce použije await. 
// Fetsh mi prátí Promise (response)
// await říká JS, ať si počká (protože fetsh nebo zběr dat z response trvá)
// data jsou to, co jsme od api chtěli
// async funkce sama o sobě vždy má return v promise (takže je třeba pak další asyn funkce na práci s tím)

import type { Pokemon, PokeType } from "../types/gameTypes";

export async function getPokemonG1() {
    // fetch pokemonů první generace
    const response = await fetch(
        `https://pokeapi.co/api/v2/generation/1`
    );
// přesun pokemonů do data
    const data = await response.json();
// zmapování každého pokemonu z data a přiřazení do array pokemon objekty s name, všechny type a img pro každého pokemona
    const pokemon = await Promise.all(
        data.pokemon_species.map(async (pokemon: Pokemon) => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );

            const data = await response.json();

            return {
                name: data.name,
                types: data.types.map((type: PokeType) => type.type.name),
                image: data.sprites.front_default,
            };
        })
    );
    return pokemon;
}