
const counterInit: any = {
  value: 0
}

export type CounterType = {
  value: number
}

export const counterReducer = (state: CounterType = counterInit, action: CounterReducer): CounterType => {
  const {type} = action;
  switch (type) {
    case 'INCREASE-COUNTER': {
      return {...state, value: state.value + 1};
    }
    case 'RESET-COUNTER': {
      return {...state, value: 0};
    }

    default: return state;
  }
}

type CounterReducer = IncreaseCounterAC | ResetCounterAC


type IncreaseCounterAC = ReturnType<typeof increaseCounterAC>

export const increaseCounterAC = () => {
  return {
    type: 'INCREASE-COUNTER',
  } as const
}


// type DecreaseCounterAC = ReturnType<typeof decreaseCounterAC>
//
// export const decreaseCounterAC = () => {
//   return {
//     type: 'DECREASE-COUNTER',
//   } as const
// }


type ResetCounterAC = ReturnType<typeof resetCounterAC>

export const resetCounterAC = () => {
  return {
    type: 'RESET-COUNTER',
  } as const
}