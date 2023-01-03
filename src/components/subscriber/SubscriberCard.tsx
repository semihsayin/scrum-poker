import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './SubscriberCard.module.css';

interface SubscriberCardProps {
    userName: string
}

const SubscriberCard = ({ userName }: SubscriberCardProps) => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const counterStatus = useSelector((state: RootState) => state.counterStatus.status);

    
    return (
        <div className={`${styles.container}`}>
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}} className={`${styles.subsCard} ${cardPoint == null ? '' : (counterStatus == true ? styles.card : styles.selected) }`}>
                
                { (cardPoint != null && cardStatus && counterStatus)
                    ? <span>{ cardPoint}</span>
                    :<></>
                }
                
            </div>
            <div className={styles.subsName}>{userName}</div>
        </div >
    )
}

export default SubscriberCard;