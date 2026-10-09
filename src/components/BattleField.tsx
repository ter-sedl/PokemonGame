import Card from "./Card"
import styles from "./BattleField.module.css";
import BattleButton from "./BattleButton";
import type { BattleFieldProps } from "../types/gameTypes";

function BattleField({
    enemy,
    selectedPokemon,
    onDrop,
    dragging,
}: BattleFieldProps) {


    // console.log("BattleField enemy:", enemy);

    return (
        <div className={styles.battleField}>
            <div
                className={`${styles.cardHolder}
                ${dragging ? styles.dragging : ""}`}
                onDragOver={(event) => event.preventDefault()}
                onDrop={onDrop}
            >
                {selectedPokemon ? (
                    <Card
                        name={selectedPokemon.name}
                        types={selectedPokemon.types}
                        image={selectedPokemon.image}
                        size="large"
                    />
                ) : (
                    "Tvůj výběr"
                )}
            </div>
            {/* <Card/> */}
            <BattleButton />
            {
                enemy && (<Card
                    name={enemy.name}
                    types={enemy.types}
                    image={enemy.image} />)
            }
        </div >
    )
};


export default BattleField