import type { CardProps } from "../types/gameTypes";
import styles from "./Card.module.css"

function Card({ name, types, image, isWinner }: CardProps) {
    console.log("Card pokemon:", name, types, isWinner);

    function capitalize(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div className={styles.card}>
            <img src={image} alt="" />
            <h3>{capitalize(name)}</h3>
            <p>{types.join(" ")}</p>
        </div>
    );
};

export default Card