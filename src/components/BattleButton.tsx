import { useContext } from "react";
import styles from "./BattleButton.module.css";
import { GameContext } from "../context/GameContext";



function BattleButton() {

    const gameState = useContext(GameContext);
    const hasSelectedPokemon = gameState?.selectedPokemon !== null
        && gameState?.selectedPokemon !== undefined;

    return (
        <button
            className={`
                 ${styles.battleButton}
                 ${hasSelectedPokemon ? styles.active : ""}
            `}
            disabled={hasSelectedPokemon ? false : true}
        >
            ⚔️<br /> Souboj
        </button>
    )
}
export default BattleButton