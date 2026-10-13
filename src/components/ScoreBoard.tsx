import { useContext } from "react";
import { GameContext } from "../context/GameContext"
import styles from "./ScoreBoarder.module.css"

function ScoreBoard() {

    const gameState = useContext(GameContext);
    const enemyName = gameState?.enemy?.name;
    const doubleDmgTypes = gameState?.enemy?.defeatedBy.join(", ");
    const hiddenContent = `${enemyName} dostává dvojé poškození od ${doubleDmgTypes} `;
    const gameStatus = gameState?.status;



    return (
        <div>
            <h3>Vítězství</h3>
            <div 
            className={`
                ${styles.help}
                ${gameStatus === "playing" ? styles.hide : ""}`}
            >
                <span className={styles.helpIcon}>?</span>
                <div className={styles.helpTooltip}>
                    {hiddenContent}
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard

// ${gameStatus === "playing" ? "" : styles.hide}