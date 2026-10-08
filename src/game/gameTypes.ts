import type { CardType, EnemyPokemon } from "../types/gameTypes";

export type GameState = {
    enemy: EnemyPokemon | null;
    cardSelect: CardType[] | null;
    // selectedPokemon: CardType | null;
    // score: number;
    // result: "win" | "lose" | null;
};

export type GameAction =
    | {
        type: "PREPARE_GAME";
        enemy: EnemyPokemon;
        cards: CardType[];
    }
    // | {
    //     type: "SELECT_POKEMON";
    //     pokemon: CardType;
    // }
    // | {
    //     type: "BATTLE";
    // }
    // | {
    //     type: "NEXT_ROUND";
    //     enemy: Pokemon;
    //     cardSelect: CardType[];
    // };