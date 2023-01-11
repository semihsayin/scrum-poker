import AverageCards from '@components/averageCards/AverageCards';
import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import styles from './Avarage.module.css'

const Avarage = () => {

    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const playerNumber = useSelector((state: RootState) => state.playerNumber.playerNumber);
    const sumOfVote = useSelector((state: RootState) => state.sumOfVoter.sumOfVote);
    const votePoint = useSelector((state:RootState) => state.numberOfVotes)
    const array = useSelector((state: RootState) => state.numbersArray);

    let average;
    if(typeof cardPoint === 'number') {
        average = (sumOfVote / playerNumber).toFixed(1)
    }
    return (
        <div style={{width: '100%',height: '70%',display: 'flex', justifyContent:'center',alignItems:'center'}}>
            
            <div className={styles.avarageDiv}>
                
                { votePoint.zero != 0
                    ? <AverageCards voteNumber= {votePoint.zero} cardNumber={0}/>
                    : <></>
                }

                { votePoint.one != 0
                    ? <AverageCards voteNumber= {votePoint.one} cardNumber={1}/>
                    : <></>
                }

                { votePoint.two != 0
                    ? <AverageCards voteNumber= {votePoint.two} cardNumber={2}/>
                    : <></>
                }
                { votePoint.three != 0
                    ? <AverageCards voteNumber= {votePoint.three} cardNumber={3}/>
                    : <></>
                }
                { votePoint.five != 0 
                    ? <AverageCards voteNumber= {votePoint.five} cardNumber={5}/>
                    : <></>
                }
                { votePoint.eight != 0
                    ? <AverageCards voteNumber= {votePoint.eight} cardNumber={8}/>
                    : <></>
                }
                { votePoint.thirteen != 0
                    ? <AverageCards voteNumber= {votePoint.thirteen} cardNumber={13}/>
                    : <></>
                }
                
                { votePoint.twentyone != 0
                    ? <AverageCards voteNumber= {votePoint.twentyone} cardNumber={21}/>
                    : <></>
                }
                { votePoint.thirtyfour != 0
                    ? <AverageCards voteNumber= {votePoint.thirtyfour} cardNumber={34}/>
                    : <></>
                }
                { votePoint.fiftyfive != 0
                    ? <AverageCards voteNumber= {votePoint.fiftyfive} cardNumber={55}/>
                    : <></>
                }
                { votePoint.eightynine != 0
                    ? <AverageCards voteNumber= {votePoint.eightynine} cardNumber={89}/>
                    : <></>
                }
                
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