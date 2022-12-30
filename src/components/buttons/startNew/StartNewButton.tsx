import { useDispatch, useSelector } from "react-redux";
import styles from "./StartNewButton.module.css"
import { setCardPoint } from '@redux/reducers/cardPoint';
import { RootState } from "@redux/store";

const StartNewButton = (props: { revealCard: boolean}) => {
    const dispatch = useDispatch();
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    
    const startNewVote = () => {
        dispatch(setCardPoint(null));
    }
    return (
        <div className={`${props.revealCard === true ? styles.displayNoneButton : '' }`}>
            <button onClick={startNewVote} className={`${styles.button} ${props.revealCard === true ? styles.displayNoneButton : styles.startButton }`}>Start New Vote </button>
        </div>
    )
}

export default StartNewButton;