import AverageCards from '@components/averageCards/AverageCards';
import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './Avarage.module.css'

const Avarage = () => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const playerNumber = useSelector((state: RootState) => state.playerNumber.playerNumber);
    const sumOfVote = useSelector((state: RootState) => state.sumOfVoter.sumOfVote);

    let average;
    if(typeof cardPoint === 'number') {
        average = ((cardPoint + sumOfVote) / playerNumber + 1).toFixed(1)
    }
    
    return (
        <div style={{width: '100%',height: '70%',display: 'flex', justifyContent:'center',alignItems:'center'}}>
            
            <div className={styles.avarageDiv}>
                
                <AverageCards />
                
                <div className={styles.halfDiv}>
                    <div className={styles.point}>
                        <span className={styles.pointHeader}>Avarage :</span>
                        <span className={styles.pointSpan}>{ average }</span>
                    </div>

                    <div className={ styles.point }>
                        <span className={styles.pointHeader}>Agreement :</span>
                        <span> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Avarage;