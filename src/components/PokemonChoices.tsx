import Card from "./Card"
import styles from "./PokemonChoices.module.css"

function PokemonChoices() {
    return (
        <div className={styles.choiceField}>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default PokemonChoices