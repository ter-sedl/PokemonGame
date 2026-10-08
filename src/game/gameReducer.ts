import type { GameAction, GameState } from "./gameTypes";

// export const initialGameState: GameState = {
//     enemy: null,
//     cardSelect: null,
//     selectedPokemon: null,
//     score: 0,
//     result: null,
// };

export function gameReducer(
  state: GameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case "PREPARE_GAME":
      return {
        enemy: action.enemy,
        cardSelect: action.cards, // array 3 pokemon" pro hráče
      };

    default:
      return state;
  }
}