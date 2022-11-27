import { MouseEvent, useState } from 'react';
import styles from './Card.module.css';

interface CardButtonProps {
    point: number,
    value: string
}

const Card = ({ point, value }: CardButtonProps) => {

    const [selected, setSelected] = useState(false);

    const cardButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelected(!selected);
        if (!selected) {
            console.log(event.currentTarget.getAttribute("data-point"));
        }
    }

    return (
        <li className={styles.cardItem}>
            <button data-point={point} onClick={cardButtonClick} className={`${styles.button} ${selected ? styles.selected : ''}`}>
                <span>{value} </span>
            </button >
        </li >
    )
}

export default Card;