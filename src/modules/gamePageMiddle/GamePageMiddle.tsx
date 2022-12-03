import Table from "@components/table/Table";
import SubscriberCard from "@components/subscriber/SubscriberCard";
import styles from "./GamePageMiddle.module.css"
const GamePageMiddle = () => {

    
    return (
        <div className={styles.container}>
            <Table />
            <SubscriberCard userName='Semih' />
        </div>
    )
}

export default GamePageMiddle;