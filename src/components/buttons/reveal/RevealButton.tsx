
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

export const CounterDiv = (
    {counter, setCounter, changeCountStatus} : { 
        counter: number, 
        setCounter: (count: number) => void,
        changeCountStatus: (val: boolean, checkStatus: boolean) => void,
    }) => {

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter == 0) {
            changeCountStatus(false,false)
        }
    },[counter])


    return (
        <div className={styles.counterDivs}>
            {
                counter === 0
                ? <></>
                :<>{ counter }</>
            }
        </div>
    )
}

const RevealButton = ( 
        {changeStatus}: { changeStatus:( val : boolean) => void }
    ) => {

    const [isActive, setIsActive] = useState(false);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const dispatch = useDispatch();
    const [revealStatus, setRevealStatus] = useState(true);
    const [counterStatus, setCounterStatus] = useState(false);
    const [counter, setCounter] = useState(3); 
    const [countCheck, setCountCheck] = useState(true);

    const showCardNumber = () => {
        changeStatus(true);
        if (cardPoint) {
            dispatch(setCardStatus(true));
        }
        setCounterStatus(true)
        setRevealStatus(false)
    }

    const changeCountStatus = ( statusCount: boolean, countCheck: boolean) => {
        setCounterStatus(statusCount);
        setCountCheck(countCheck);
    }
    
    return (
        <>
            <button onClick={showCardNumber} className={`${styles.button} ${revealStatus === false ? styles.displayNoneButton : styles.revealButton }`}>Reveal Cards</button>
            { counterStatus
                ? <CounterDiv setCounter={setCounter} counter = {counter} changeCountStatus= { changeCountStatus} />
                : <StartNewButton revealCard = { revealStatus }/>
            }
        </>
    )
}

export default RevealButton;