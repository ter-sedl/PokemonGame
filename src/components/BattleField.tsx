import Card from "./Card"
import styles from "./BattleField.module.css";
import BattleButton from "./BattleButton";

function BattleField() {
    return (
        <div className={styles.battleField}>
            <div className={styles.cardHolder}>Tvůj výběr</div>
            {/* <Card/> */}
            <BattleButton />
            <Card/>
        </div>
    )
};


export default BattleField