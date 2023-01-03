
import * as React from "react";
import styles from "./RevealButton.module.css"
import StartNewButton from "@components/buttons/startNew/StartNewButton";
import { setAvarageStatus, setCardStatus, setCounterStatus } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';

interface CounterProps {
    status: () => void
}

export const CounterDiv = (
    {counter, setCounter, changeCountStatus} : { 
        counter: number, 
        setCounter: (count: number) => void,
        changeCountStatus: (val: boolean) => void,
    }) => {

    const dispatch = useDispatch();
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0) {
            changeCountStatus(false)
            dispatch(setCounterStatus(true))
            dispatch(setAvarageStatus(true));
        } else {
            dispatch(setCounterStatus(false))
        }
    },[counter])


    return (
        <div className={styles.counterDivs}>
            {
                counter === 0
                ? <></>
                :<span className={styles.counterText}>{ counter }</span>
            }
        </div>
    )
}

const RevealButton = ( 
        {changeStatus}: { changeStatus:( val : boolean) => void }
    ) => {
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const avarageStatus = useSelector((state: RootState) => state.avarageStatus.status);
    const dispatch = useDispatch();
    const [revealStatus, setRevealStatus] = useState(true);
    const [counterStatus, setCounterStatus] = useState(false);
    const [counter, setCounter] = useState(3); 

    
    const showCardNumber = () => {
        changeStatus(true);
        if (cardPoint) {
            dispatch(setCardStatus(true));
        }
        setCounterStatus(true)
        setRevealStatus(false)
    }

    const changeCountStatus = ( statusCount: boolean) => {
        setCounterStatus(statusCount);
    }
    
    return (
        <>
            <button onClick={showCardNumber} className={`${styles.button} ${revealStatus === false ? styles.displayNoneButton : styles.revealButton }`}>
                <span>Reveal Cards</span>
            </button>
            { counterStatus
                ? <CounterDiv setCounter={setCounter} counter = {counter} changeCountStatus= { changeCountStatus} />
                : <StartNewButton revealCard = { revealStatus }/>
            }
        </>
    )
}

export default RevealButton;