import type { DamageRelations, Pokemon, EnemyPokemon, CardType } from "../types/gameTypes";

// z array o pokemonech vezme všechny unikátní typy do nové array
export function getUniqueTypes(pokemonArray: Pokemon[]) {
    return [...new Set(
        pokemonArray.flatMap((pokemon) => pokemon.types)
    )];
}

export function getRandomEnemy(pokemonArray: Pokemon[], relationsArray: DamageRelations[]) {

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
    // získání všech ostatních types -- nepoužito
    // const anotherDamage = relationsArray
    //     .map((relation) => relation.type)
    //     .filter((type) => !doubleDamageFrom.has(type));

    const enemyPokemon: EnemyPokemon = {
        ...randomPokemon,
        defeatedBy: [...doubleDamageFrom],
    };
    return enemyPokemon;
};




// získej array s vítezným a dvěma nevítěznými pokemony
export function getPokemonCards(
    pokemonArray: Pokemon[],
    enemyPokemon: EnemyPokemon
) {
    const pokemonCards: CardType[] = [];

    // array možných vítězů
    const winners = pokemonArray.filter((pokemon) =>
        pokemon.types.some((type) =>
            enemyPokemon.defeatedBy.includes(type)
        )
    );

    const winner =
        winners[Math.floor(Math.random() * winners.length)];

    if (!winner) {
        return pokemonCards;
    }

    pokemonCards.push({
        ...winner,
        isWinner: true,
    });

    // array nevítězů
    const losers = pokemonArray.filter(
        (pokemon) =>
            pokemon !== winner &&
            pokemon.types.every(
                (type) => !enemyPokemon.defeatedBy.includes(type)
            )
    );
    // vybere 2 pokemony
    const randomLosers = losers
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    randomLosers.forEach((pokemon) => {
        pokemonCards.push({
            ...pokemon,
            isWinner: false,
        });
    });

    // shuffle se zachováním pokemonCards (jen pro zajímavost, nepotřebné)
    const shuffledCards = [...pokemonCards].sort(() => Math.random() - 0.5);

    return shuffledCards;
}


// získej pokemona bez double damage to Enemy