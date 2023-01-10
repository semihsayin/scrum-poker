import { setNumberOfVotes, setPlayerNumber, setSumOfVote } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./GamePageHeader.module.css"

const GamePageHeader = () => {
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const counterStatus = useSelector((state: RootState) => state.counterStatus.status);
    const numbers = useSelector((state: RootState) => state.numbersArray.numbers)

    let sum = 0;
    let zero = 0,one = 0,two = 0,three = 0,five = 0,eight = 0,thirteen = 0, twentyone = 0, thirtyfour = 0, fiftyfive = 0, eightynine = 0;
    const dispatch = useDispatch();

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        if(numbers[i] == 0)
            zero += 1
        else if(numbers[i] == 1)
            one += 1
        else if(numbers[i] == 2)
            two += 1
        else if(numbers[i] == 3)
            three += 1
        else if(numbers[i] == 5)
            five += 1
        else if(numbers[i] == 8)
            eight += 1
        else if(numbers[i] == 13)
            thirteen += 1
        else if(numbers[i] == 21)
            twentyone += 1
        else if(numbers[i] == 34)
            thirtyfour += 1
        else if(numbers[i] == 55)
            fiftyfive += 1
        else if(numbers[i] == 89)
            eightynine += 1
    }
    
    dispatch(setNumberOfVotes({ zero,one,two,three,five,eight,thirteen, twentyone, thirtyfour, fiftyfive, eightynine }))
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