import { AppThunk } from './store';

const counterInit: CounterType = {
    currentValue: 3
}

export type CounterType = {
    currentValue: number
}

export const counterReducer = (state: CounterType = counterInit, action: CounterReducer): CounterType => {
    switch (action.type) {
        case 'SET-COUNTER': {
            return {...state, currentValue: action.payload.value};
        }
        case 'INCREASE-COUNTER': {
            return {...state, currentValue: state.currentValue + 1};
        }
        case 'RESET-COUNTER': {
            return {...state, currentValue: action.payload.value};
        }
        default:
            return state;
    }
}

export type CounterReducer = SetCounterAC | IncreaseCounterAC | ResetCounterAC

type SetCounterAC = ReturnType<typeof setCounterAC>

export const setCounterAC = (value: number) => {
    return {
        type: 'SET-COUNTER',
        payload: {
            value
        }
    } as const
}

type IncreaseCounterAC = ReturnType<typeof increaseCounterAC>

export const increaseCounterAC = () => {
    return {
        type: 'INCREASE-COUNTER',
    } as const
}

type ResetCounterAC = ReturnType<typeof resetCounterAC>

export const resetCounterAC = (value: number) => {
    return {
        type: 'RESET-COUNTER',
        payload: {
            value
        }
    } as const
}

export const setCounterTC = (value: number): AppThunk => async (dispatch) => {
    dispatch(setCounterAC(value))
}

export const increaseCounterTC = (): AppThunk => (dispatch) => {
    dispatch(increaseCounterAC())
}

export const resetCounterTC = (): AppThunk => (dispatch, getState) => {
    console.log(getState())
    dispatch(resetCounterAC(getState().startValue.currentStartValue))
}