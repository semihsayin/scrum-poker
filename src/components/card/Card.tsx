import { useDispatch, useSelector } from 'react-redux';
import { setCardPoint } from '@redux/reducers/cardPoint';
import { RootState } from '@redux/store';
import styles from './Card.module.css';

interface CardButtonProps {
    point: number,
}

const Card = ({ point }: CardButtonProps) => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const dispatch = useDispatch();

    const cardButtonClick = (point: number) => {
        if (cardPoint != point) {
            dispatch(setCardPoint(point));
        }
        else {
            dispatch(setCardPoint(null));
        }
    }

    return (
        <li className={styles.cardItem}>
            <button data-point={point} onClick={() => cardButtonClick(point)} className={`${styles.button} ${cardPoint === point ? styles.selected : ''}`}>
                <span>{point} </span>
            </button >
        </li >
    )
}

export default Card;