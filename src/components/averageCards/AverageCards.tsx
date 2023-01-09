import styles from './AverageCards.module.css'

const AverageCards = () => {

    return (
        <div className={`${styles.halfDiv} ${styles.vote}`}>
            <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                <div className={styles.stick}></div>
            </div>

            <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                <div className={styles.cardAvarage}></div>
            </div>

            <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                <span style={{fontSize: '1.2rem'}}>1 Vote</span>
            </div>
        </div>
    )
}

export default AverageCards;