import styles from "./StartNewButton.module.css"

const StartNewButton = () => {

    const startNewVote = () => {

    }
    return (
        <span onClick={startNewVote} className={styles.startButton}>Reveal Cards</span>
    )
}