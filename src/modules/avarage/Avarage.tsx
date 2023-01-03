import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './Avarage.module.css'

const Avarage = () => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);

    return (
        <div style={{width: '100%',height: '70%',display: 'flex', justifyContent:'center',alignItems:'center'}}>
            
            <div className={styles.avarageDiv}>
                <div className={`${styles.halfDiv} ${styles.vote}`}>
                    <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                        <div className={styles.stick}></div>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                        <div className={styles.cardAvarage}>{ cardPoint }</div>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                        <span style={{fontSize: '1.2rem'}}>1 Vote</span>
                    </div>
                </div>

                <div className={styles.halfDiv}>
                    <div className={styles.point}>
                        <span className={styles.pointHeader}>Avarage :</span>
                        <span className={styles.pointSpan}>{ cardPoint }</span>
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