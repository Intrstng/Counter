export type MaxValueInitType = {
  currentMaxValue: number
}

const maxValueInit: MaxValueInitType = {
  currentMaxValue: 0
}

export const maxValueReducer = (state: MaxValueInitType = maxValueInit, action: SetMaxValueAC): MaxValueInitType => {
  const {type, payload} = action;
  switch (type) {
    case 'SET-MAX-VALUE': {
      return {...state, currentMaxValue: payload.value};
    }
    default: return state;
  }
}


type SetMaxValueAC = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (value: number) => {
  return {
    type: 'SET-MAX-VALUE',
    payload: {
      value
    }
  } as const
}