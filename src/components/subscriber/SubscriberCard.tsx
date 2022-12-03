import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './SubscriberCard.module.css';

interface SubscriberCardProps {
    userName: string
}

const SubscriberCard = ({ userName }: SubscriberCardProps) => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.subsCard} ${cardPoint != null ? styles.selected : ''}`}></div>
            <div className={styles.subsName}>{userName}</div>
        </div >
    )
}

export default SubscriberCard;