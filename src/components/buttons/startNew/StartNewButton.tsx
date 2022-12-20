import styles from "./StartNewButton.module.css"

const StartNewButton = (props: { revealCard: boolean}) => {

    const startNewVote = () => {

    }
    return (
        <button onClick={startNewVote} className={`${styles.button} ${props.revealCard === false ? styles.displayNoneButton : styles.startButton }`}>Start New Vote</button>
    )
}

export default StartNewButton;