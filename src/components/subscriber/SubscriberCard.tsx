import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './SubscriberCard.module.css';

interface SubscriberCardProps {
    userName: string
}

const SubscriberCard = ({ userName }: SubscriberCardProps) => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);

    return (
        <div className={`${styles.container}`}>
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}} className={`${styles.subsCard} ${cardPoint == null ? '' : styles.selected }`}>

                { (cardPoint != null && cardStatus == true)
                    ? <span>{ cardPoint}</span>
                    :<></>
                }
                
            </div>
            <div className={styles.subsName}>{userName}</div>
        </div >
    )
}

export default SubscriberCard;