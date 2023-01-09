import styles from './AverageCards.module.css'

const AverageCards = (props: { voteNumber: number, cardNumber: number}) => {

    return (
        <div className={`${styles.halfDiv} ${styles.vote}`}>
            <div style={{ display:'flex', justifyContent:'center',marginBottom: '10px'}}>
                <div className={styles.stick}></div>
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