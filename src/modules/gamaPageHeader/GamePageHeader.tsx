import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import styles from "./GamePageHeader.module.css"

const GamePageHeader = () => {
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const counterStatus = useSelector((state: RootState) => state.counterStatus.status);

    const numbers = [8,13,21,34,55,89];
    return (
        <div className={styles.container}>
            <ul className={styles.ulList}>
                {numbers.map(number => (
                    <li>
                        <div className={`${styles.ulList} ${cardPoint == null ? '' : (counterStatus == true ? styles.card : styles.selected) }`}>
                            { number }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GamePageHeader;