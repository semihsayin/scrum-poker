import { RootState } from '@redux/store';
import CardContainer from "@modules/cardContainer/CardContainer";
import { useSelector } from "react-redux";
import styles from "./GamePageFooter.module.css"
const GamePageFooter = () => {
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const counterStatus = useSelector((state: RootState) => state.cardStatus.status);

    console.log(counterStatus)
    return (
        <div className={styles.container}>
            <div style={{ width: '100%',fontSize: '1.8rem',textAlign:'center'}}>
                { cardStatus
                    ? <span>Counting votes...</span>
                    : <span>Choose your card</span>
                }
            </div>
            { !counterStatus
                ? <CardContainer />
                : <></>
            }
        </div>
    )
}

export default GamePageFooter;