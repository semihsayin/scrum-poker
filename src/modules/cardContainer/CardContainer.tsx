import Card from "@components/card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = () => {
    return (
        <ul className={styles.cardItemList}>
            <Card value="0" point={0} />
            <Card value="1" point={1} />
            <Card value="2" point={2} />
            <Card value="3" point={3} />
            <Card value="5" point={5} />
            <Card value="8" point={8} />
            <Card value="13" point={13} />
            <Card value="21" point={21} />
            <Card value="34" point={34} />
            <Card value="55" point={55} />
            <Card value="89" point={89} />
        </ul>
    )
}

export default CardContainer;