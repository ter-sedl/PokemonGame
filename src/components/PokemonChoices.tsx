import type { PokemonChoicesProps } from "../types/gameTypes"
import Card from "./Card"
import styles from "./PokemonChoices.module.css"

function PokemonChoices({ options }: PokemonChoicesProps) {
    return (
        <div className={styles.choiceField}>
            <Card
                name={options[0].name}
                types={options[0].types}
                image={options[0].image}
                isWinner={options[0].isWinner} />
            <Card
                name={options[1].name}
                types={options[1].types}
                image={options[1].image}
                isWinner={options[1].isWinner} />
            <Card
                name={options[2].name}
                types={options[2].types}
                image={options[2].image}
                isWinner={options[2].isWinner} />
        </div>
    )
}

export default PokemonChoices