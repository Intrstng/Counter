export type SetInputErrorInitType = {
  error: boolean
}

const SetInputErrorInit: SetInputErrorInitType = {
  error: false
}

export type SetInputErrorType = {
  error: boolean
}

export const setInputErrorReducer = (state: SetInputErrorType = SetInputErrorInit, action: InputErrorSetterReducer): SetInputErrorType => {
  switch (action.type) {
    case 'SET-ERROR': {
      return {...state, error: true};
    }
    case 'UNSET-ERROR': {
      return {...state, error: false};
    }
    default: return state;
  }
}

type InputErrorSetterReducer =  SetInputErrorAC | UnsetInputErrorAC


type SetInputErrorAC = ReturnType<typeof setInputErrorAC>

export const setInputErrorAC = () => {
  return {
    type: 'SET-ERROR'
  } as const
}

type UnsetInputErrorAC = ReturnType<typeof unsetInputErrorAC>

export const unsetInputErrorAC = () => {
  return {
    type: 'UNSET-ERROR',
  } as const
}