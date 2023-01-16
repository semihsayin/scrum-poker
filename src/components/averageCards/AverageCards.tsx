import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './AverageCards.module.css'

const AverageCards = (props: { voteNumber: number, cardNumber: number}) => {

    const playerNumber = useSelector((state: RootState) => state.playerNumber.playerNumber);
    let percentage = ((100 * props.voteNumber) / playerNumber).toFixed(1);
    console.log(percentage)
    return (
        <div className={`${styles.halfDiv} ${styles.vote}`}>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent:'center'}}>
                <div className={styles.stickBg}>
                    <div className={styles.stick} style={{height: percentage+"px"}}></div>
                </div>
            </div>

            <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                <div className={styles.cardAvarage}>{ props.cardNumber }</div>
            </div>

            <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                <span style={{fontSize: '1.2rem'}}>{ props.voteNumber} Vote</span>
            </div>
        </div>
    )
}

export default AverageCards;