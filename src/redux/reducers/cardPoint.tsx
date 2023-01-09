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

export interface NumbersArray {
    numbers: number[],
}

export interface NumberOfVotes {
    zero: number,
    one: number,
    two: number,
    three: number,
    five: number,
    eight: number,
    thirteen: number,
    twentyone: number,
    thirtyfour: number,
    fiftyfive: number,
    eightynine: number,
}

const initialNumbersArray: NumbersArray = {
    numbers: [8,13,21,34,55,89],
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

const initialNumberOfVotes: NumberOfVotes = {
    zero: 0,
    one: 0,
    two: 0,
    three: 0,
    five: 0,
    eight: 0,
    thirteen: 0,
    twentyone: 0,
    thirtyfour: 0,
    fiftyfive: 0,
    eightynine: 0,
}

export const numbersArrayReducer = createSlice({
    name: 'numbersArray',
    initialState: initialNumbersArray,
    reducers: {
        setNumbersArray: (state, action: PayloadAction<number>) => {
            state.numbers.push(action.payload);
        }
    }
})
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
    name: 'sumOfNumber',
    initialState: initialSumOfVote,
    reducers: {
        setSumOfVote: (state, action: PayloadAction<number>) => {
            state.sumOfVote = action.payload;
        }
    }
})

export const numberOfVotes = createSlice({
    name: 'numberOfVote',
    initialState: initialNumberOfVotes,
    reducers: {
        setNumberOfVotes: (state, action: PayloadAction<{ zero: number, one: number, two : number, three: number, eight: number, thirteen: number,twentyone : number, thirtyfour: number, fiftyfive: number, eightynine: number }>) => {
            state.zero = action.payload.zero;
            state.one = action.payload.one;
            state.two = action.payload.two;
            state.three = action.payload.three;
            state.eight = action.payload.eight;
            state.thirteen = action.payload.thirteen;
            state.twentyone = action.payload.twentyone;
            state.thirtyfour = action.payload.thirtyfour;
            state.fiftyfive = action.payload.fiftyfive;
            state.eightynine = action.payload.eightynine;
        }
    }
})



export const { setCardPoint } = cardPointReducer.actions;
export const { setCardStatus } = cardStatusReducer.actions;
export const { setCounterStatus } = counterStatusReducer.actions;
export const { setAvarageStatus } = avarageStatusReducer.actions;
export const { setPlayerNumber } = playerNumberReducer.actions;
export const { setSumOfVote } = sumOfVoteReducer.actions;
export const { setNumberOfVotes } = numberOfVotes.actions;

export default cardPointReducer.reducer;