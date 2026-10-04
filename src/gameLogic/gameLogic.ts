import type { DamageRelations, Pokemon } from "../types/gameTypes";

// z array o pokemonech vezme všechny unikátní typy do nové array
export function getUniqueTypes(pokemonArray: Pokemon[]) {
    return [...new Set(
        pokemonArray.flatMap((pokemon) => pokemon.types)
    )];
}

export function getRandomEnemy(pokemonArray: Pokemon[], relationsArray: DamageRelations[]) {
    if (pokemonArray.length === 0) {
        return undefined;
    }
    // získej náhodného pokemona
    const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

    //ziskání winning types podle randomPokemon.types a array s damageRelations
    const doubleDamageFrom = new Set(
        randomPokemon.types.flatMap((pokemonType) => {
            const relation = relationsArray.find(
                (relation) => relation.type === pokemonType
            );
            return relation?.doubleDamageFrom ?? [];
        })
    );
    // získání všech ostatních types 
    const anotherDamage = relationsArray
        .map((relation) => relation.type)
        .filter((type) => !doubleDamageFrom.has(type));

    const enemyPokemon = {
        ...randomPokemon,
        defeatetBy: [...doubleDamageFrom],
        notDefeatedBy: [...anotherDamage],
    };
    return enemyPokemon;
};

// získej array s vítezným a dvěma nevítěznými pokemony
// export default function getPokemonCards(
//     pokemonArray: Pokemon[],
//     enemyPokemon: Pokemon) {

//     const enemyTypes = pokemon.types

// };


// získej pokemona bez double damage to Enemy