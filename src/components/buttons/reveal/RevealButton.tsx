
import * as React from "react";
import styles from "./RevealButton.module.css"
import StartNewButton from "@components/buttons/startNew/StartNewButton";
import { setCardStatus } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useState} from 'react';

interface CounterProps {
    status: () => void
}
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

    

    const [revealStatus, setRevealStatus] = useState(true);

    const [counterStatus, setCounterStatus] = useState(false);

    /*const [startStatus, setStartStatus] = useState(false);

    const countStartStatus = (status:boolean) => {
        setStartStatus(status)
    }*/

    const showCardNumber = () => {
        setCounterStatus(true)
        if (cardPoint) {
            dispatch(setCardStatus(true));
        }
    }

    //TODO counter buton ile tetiklenicek. Counter bittiğinde StartNew butonu gözükücek

    return (
        <>
            <button onClick={showCardNumber} className={`${styles.button} ${revealStatus === false ? styles.displayNoneButton : styles.revealButton }`}>Reveal Cards {startStatus}</button>
            { counterStatus
                ? <CounterDiv />
                : <></>
            }
            <StartNewButton revealCard = { revealStatus }/>
        </>
    )
}

export default RevealButton;