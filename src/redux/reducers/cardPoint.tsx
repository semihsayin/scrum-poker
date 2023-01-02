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

export const { setCardPoint } = cardPointReducer.actions;
export const { setCardStatus } = cardStatusReducer.actions;
export const { setCounterStatus } = counterStatusReducer.actions;
export const { setAvarageStatus } = avarageStatusReducer.actions;

export default cardPointReducer.reducer;