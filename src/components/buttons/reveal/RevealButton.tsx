
import * as React from "react";
import styles from "./RevealButton.module.css"
import StartNewButton from "@components/buttons/startNew/StartNewButton";
import { setCardStatus } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useState} from 'react';

export const CounterDiv = () => {
    const [counter, setCounter] = React.useState(3);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    },[counter])
    return (
        <div className={styles.counterDivs}>
            { counter }
        </div>
    )
}

const RevealButton = () => {

    const [isActive, setIsActive] = useState(false);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const dispatch = useDispatch();

    
    const showCardNumber = () => {
        if (cardPoint) {
            dispatch(setCardStatus(true));
        }
    }

    //TODO counter buton ile tetiklenicek. Counter bittiğinde StartNew butonu gözükücek

    return (
        <>
            <button onClick={showCardNumber} className={styles.revealButton}>Reveal Cards</button>

            <StartNewButton />
        </>
    )
}

export default RevealButton;