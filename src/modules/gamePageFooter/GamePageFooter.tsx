import CardContainer from "@modules/cardContainer/CardContainer";
import styles from "./GamePageFooter.module.css"
const GamePageFooter = () => {
    return (
        <div className={styles.container}>
            <div style={{ width: '100%',fontSize: '1.8rem',textAlign:'center'}}>Choose your card</div>
            <CardContainer />
        </div>
    )
}

export default GamePageFooter;