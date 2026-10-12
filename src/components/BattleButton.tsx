import styles from "./BattleButton.module.css"


function BattleButton() {
    return (
        <button className={`
        ${styles.battleButton}
        `}>
            ⚔️<br /> Souboj
            </button>
    )
}
export default BattleButton