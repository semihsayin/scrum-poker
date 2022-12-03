import Card from "@components/card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = () => {
    return (
        <ul className={styles.cardItemList}>
            <Card point={0} />
            <Card point={1} />
            <Card point={2} />
            <Card point={3} />
            <Card point={5} />
            <Card point={8} />
            <Card point={13} />
            <Card point={21} />
            <Card point={34} />
            <Card point={55} />
            <Card point={89} />
        </ul>
    )
}

export default CardContainer;