import { useDispatch, useSelector } from "react-redux";
import styles from "./StartNewButton.module.css"
import { setAvarageStatus, setCardPoint, setCardStatus, setCounterStatus } from '@redux/reducers/cardPoint';
import { RootState } from "@redux/store";

const StartNewButton = (props: { revealCard: boolean}) => {
    const dispatch = useDispatch();
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    
    const startNewVote = () => {
        dispatch(setCardPoint(null));
        dispatch(setCounterStatus(false));
        dispatch(setCardStatus(false));
        dispatch(setAvarageStatus(false));
    }
    return (
        <div className={`${props.revealCard === true ? styles.displayNoneButton : '' }`}>
            <button onClick={startNewVote} className={`${styles.button} ${props.revealCard === true ? styles.displayNoneButton : styles.startButton }`}>
                <span className={styles.buttonText}>Start New Vote </span>
            </button>
        </div>
    )
}

export default StartNewButton;