import { configureStore } from "@reduxjs/toolkit";
import { avarageStatusReducer, cardPointReducer, cardStatusReducer, counterStatusReducer, playerNumberReducer, sumOfVoteReducer } from "./reducers/cardPoint";

export const store = configureStore({
    reducer: {
        cardPoint: cardPointReducer.reducer,
        cardStatus: cardStatusReducer.reducer,
        counterStatus: counterStatusReducer.reducer,
        avarageStatus : avarageStatusReducer.reducer,
        playerNumber : playerNumberReducer.reducer,
        sumOfVoter: sumOfVoteReducer.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch