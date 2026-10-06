import styles from "./Card.module.css"

function Card( {pokemon = "pokemon"}:any ) {
console.log("Card pokemon:", pokemon);

function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

 return(
    <div className={styles.card}>
        <img src={pokemon.image} alt="" />
        <h3>{capitalize(pokemon.name)}</h3>
        <p>{pokemon.types.join(" ")}</p>
    </div>
 );
};

export default Card