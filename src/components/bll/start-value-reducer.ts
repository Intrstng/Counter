import { AppThunk } from './store';

export type StartValueInitType = {
  currentStartValue: number
}

const startValueInit: StartValueInitType = {
  currentStartValue: 0
}

export const startValueReducer = (state: StartValueInitType = startValueInit, action: SetStartValueAC): StartValueInitType => {
  const {type, payload} = action;
  switch (type) {
    case 'SET-START-VALUE': {
      return {...state, currentStartValue: payload.value};
    }
    default: return state;
  }
}


export type SetStartValueAC = ReturnType<typeof setStartValueAC>

export const setStartValueAC = (value: number) => {
  return {
    type: 'SET-START-VALUE',
    payload: {
      value
    }
  } as const
}

export const setStartValueTC = (value: number): AppThunk => (dispatch) => {
    dispatch(setStartValueAC(value))
}