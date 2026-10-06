import Card from "./Card"
import styles from "./PokemonChoices.module.css"

function PokemonChoices( {options}): any {
    return (
        <div className={styles.choiceField}>
            <Card pokemon = {options[0]}/>
            <Card pokemon = {options[1]}/>
            <Card pokemon = {options[2]}/>
        </div>
    )
}

export default PokemonChoices