import styles from './Table.module.css';
import RevealButton from '@components/buttons/reveal/RevealButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const Table = () => {
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);
    const [status, setStatus] = useState(false);

    
    const changeStatus = (statusC:boolean) => {
        setStatus(statusC);
    }

    
    return (
        <div className={styles.tableDiv}>
            { cardPoint == null
                ? <span className={styles.pickSpan}>Pick your card! { cardPoint }</span>
                : <RevealButton changeStatus= { changeStatus }/>
            }

            
        </div>
    )
}

export default Table;