import styles from "./StartNewButton.module.css"

const StartNewButton = () => {

    const startNewVote = () => {

    }
    return (
        <button onClick={startNewVote} className={styles.startButton}>Start New Vote</button>
    )
}

export default StartNewButton;