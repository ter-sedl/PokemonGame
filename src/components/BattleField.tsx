import Card from "./Card"
import styles from "./BattleField.module.css";
import BattleButton from "./BattleButton";
// import type { EnemyPokemon } from "../types/gameTypes";


function BattleField( {enemy}: any) {
console.log("BattleField enemy:", enemy);

    return (
        <div className={styles.battleField}>
            <div className={styles.cardHolder}>Tvůj výběr</div>
            {/* <Card/> */}
            <BattleButton />
            <Card pokemon = {enemy}/>
        </div>
    )
};


export default BattleField