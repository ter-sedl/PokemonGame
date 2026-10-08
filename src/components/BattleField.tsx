import Card from "./Card"
import styles from "./BattleField.module.css";
import BattleButton from "./BattleButton";
import type { BattleFieldEnemyProps } from "../types/gameTypes";

function BattleField({ enemy }: BattleFieldEnemyProps) {
    console.log("BattleField enemy:", enemy);

    return (
        <div className={styles.battleField}>
            <div className={styles.cardHolder}>Tvůj výběr</div>
            {/* <Card/> */}
            <BattleButton />
            {enemy && (<Card
                name={enemy.name}
                types={enemy.types}
                image={enemy.image} />)}
        </div>
    )
};


export default BattleField