import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CardPointState {
    point: number | null
}

export interface CardStatusState {
    status: boolean
}

export interface CounterStatus {
    status: boolean
}

export interface AvarageStatus {
    status : boolean
}

export interface PlayerNumber {
    playerNumber: number,
}
export interface SumOfVote {
    sumOfVote: number,
}

const initialPointState: CardPointState = {
    point: null,
}

const initialStatusState: CardStatusState = {
    status: false,
}

const initialCounterStatus: CounterStatus = {
    status: false,
}

const initialAvarageStatus: AvarageStatus = {
    status : false,
}

const initialPlayerNumber: PlayerNumber = {
    playerNumber: 0,
}

const initialSumOfVote: SumOfVote = {
    sumOfVote: 0,
}

export const cardPointReducer = createSlice({
    name: 'cardPoint',
    initialState: initialPointState,
    reducers: {
        setCardPoint: (state, action: PayloadAction<number | null>) => {
            state.point = action.payload;
        }
    }
})

export const cardStatusReducer = createSlice({
    name: 'cardStatus',
    initialState: initialStatusState,
    reducers: {
        setCardStatus: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload;
        }
    }

})

export const counterStatusReducer = createSlice({
    name: 'counterStatus',
    initialState: initialCounterStatus,
    reducers: {
        setCounterStatus: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload;
        }
    }
})
export const avarageStatusReducer = createSlice({
    name: 'avarageStatus',
    initialState: initialAvarageStatus,
    reducers: {
        setAvarageStatus: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload;
        }
    }
})

export const playerNumberReducer = createSlice({
    name: 'playerNumber',
    initialState: initialPlayerNumber,
    reducers: {
        setPlayerNumber: (state, action: PayloadAction<number>) => {
            state.playerNumber = action.payload;
        }
    }
})

export const sumOfVoteReducer = createSlice({
    name: 'playerNumber',
    initialState: initialSumOfVote,
    reducers: {
        setSumOfVote: (state, action: PayloadAction<number>) => {
            state.sumOfVote = action.payload;
        }
    }
})

export const { setCardPoint } = cardPointReducer.actions;
export const { setCardStatus } = cardStatusReducer.actions;
export const { setCounterStatus } = counterStatusReducer.actions;
export const { setAvarageStatus } = avarageStatusReducer.actions;
export const { setPlayerNumber } = playerNumberReducer.actions;
export const { setSumOfVote } = sumOfVoteReducer.actions;

export default cardPointReducer.reducer;