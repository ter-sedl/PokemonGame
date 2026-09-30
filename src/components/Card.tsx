import styles from "./Card.module.css"

function Card() {
 return(
    <div className={styles.card}>
        <h1>Image</h1>
        <h3>Name</h3>
    </div>
 );
};

export default Card