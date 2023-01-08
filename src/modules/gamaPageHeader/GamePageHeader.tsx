import { setPlayerNumber, setSumOfVote } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./GamePageHeader.module.css"

const GamePageHeader = () => {
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const counterStatus = useSelector((state: RootState) => state.counterStatus.status);
    const playerNumber = useSelector((state: RootState) => state.playerNumber.playerNumber);
    const sumOfVote = useSelector((state: RootState) => state.sumOfVoter.sumOfVote);

    const numbers = [8,13,21,34,55,89];
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        
    }
    
    const dispatch = useDispatch();
    dispatch(setPlayerNumber(numbers.length))
    dispatch(setSumOfVote(sum))


    return (
        <div className={styles.container}>
            <ul className={styles.ulList}>
                {numbers.map(number => (
                    <li key={number}>
                        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}} className={`${styles.subsCard} ${cardPoint == null ? '' : (counterStatus == true ? styles.cards : styles.selected) }`}>
                            
                            { (cardPoint != null && cardStatus && counterStatus)
                                ? <span>{ number }</span>
                                :<></>
                            }
                        </div>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default GamePageHeader;