import { RootState } from '@redux/store';
import CardContainer from "@modules/cardContainer/CardContainer";
import { useSelector } from "react-redux";
import styles from "./GamePageFooter.module.css"
const GamePageFooter = () => {
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const counterStatus = useSelector((state: RootState) => state.cardStatus.status);
    const avarageStatus = useSelector((state: RootState) => state.avarageStatus.status);
    return (
        <div className={styles.container}>
            <div style={{ width: '100%',fontSize: '1.8rem',textAlign:'center'}}>
                { !counterStatus
                    ? <span>Choose your card</span>
                    : avarageStatus 
                        ?<span>Done</span>
                        :<span>Counting votes...</span>
                }
            </div>
          
          { avarageStatus
                ? <></>
                : <CardContainer />
          }
        </div>
    )
}

export default GamePageFooter;