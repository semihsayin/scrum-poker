import SubscriberCard from "@components/subscriber/SubscriberCard";
import CardContainer from "@modules/cardContainer/CardContainer";
import { setCardStatus } from "@redux/reducers/cardPoint";
import { RootState } from "@redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const GamePage = () => {

    const cardStatus = useSelector((state: RootState) => state.cardStatus.status);
    const cardPoint = useSelector((state: RootState) => state.cardPoint.point);

    const dispatch = useDispatch();

    const showCardNumber = () => {
        if (cardPoint) {
            dispatch(setCardStatus(true));
        }
    }

    return (
        <>
            <SubscriberCard userName='Semih' />
            <CardContainer />

            <button onClick={showCardNumber}>Click me</button>
        </>
    )
}

export default GamePage;