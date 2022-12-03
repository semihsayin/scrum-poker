import styles from './Table.module.css';
import RevealButton from '@components/buttons/reveal/RevealButton';

const Table = () => {
    return (
        <div className={styles.tableDiv}>
            Pick your card!

            <RevealButton />
        </div>
    )
}

export default Table;