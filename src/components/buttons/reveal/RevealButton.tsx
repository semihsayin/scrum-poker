import styles from "./RevealButton.module.css"
import StartNewButton from "@components/buttons/startNew/StartNewButton";
import { setCardStatus } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RevealButton = () => {



    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);

    const dispatch = useDispatch();

    const showCardNumber = () => {
        if (cardPoint) {
            dispatch(setCardStatus(true));
        }
    }

    return (
        <>
            <button onClick={showCardNumber} className={styles.revealButton}>Reveal Cards</button>
            
            <StartNewButton />
        </>
    )
}

export default RevealButton;