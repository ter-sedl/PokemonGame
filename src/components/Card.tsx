import { useState } from "react";
import type { CardProps } from "../types/gameTypes";
import styles from "./Card.module.css"

function Card({
    name,
    types,
    image,
    onDragStart,
    onDragEnd,
    size,
    dragabble = false,
    onClick }: CardProps) {

    const [isDragging, setIsDragging] = useState(false);
    // console.log("Card pokemon:", name, types, isWinner);

    function capitalize(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div
            onClick={onClick}
            className={`
                ${styles.card} 
                ${size === "large" ? styles.large : ""}
                ${isDragging ? styles.dragging : ""}
            `}
            draggable={dragabble}
            onDragStart={() => {
                onDragStart?.()
                setIsDragging(true);
            }}
            onDragEnd={() => {
                onDragEnd?.();
                setIsDragging(false);
            }}
        >
            <img src={image} alt="" draggable={dragabble} />
            <h3>{capitalize(name)}</h3>
            <p>{types.join(" ")}</p>
        </div>
    );
};

export default Card