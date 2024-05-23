
export type CounterInitType = {
  currentValue: number
}

const counterInit: CounterInitType = {
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
    default: return state;
  }
}

type CounterReducer =  SetCounterAC | IncreaseCounterAC | ResetCounterAC


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