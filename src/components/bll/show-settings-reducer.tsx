import { AppThunk } from './store';

export type ShowSettingsInitType = {
  flag: boolean
}

const showSettingsInit: ShowSettingsInitType = {
  flag: false
}

export type ShowSettingsType = {
  flag: boolean
}

export const showSettingsReducer = (state: ShowSettingsType = showSettingsInit, action: ShowToggleReducer): ShowSettingsType => {
  switch (action.type) {
    case 'SHOW-SETTINGS': {
      return {...state, flag: true};
    }
    case 'HIDE-SETTINGS': {
      return {...state, flag: false};
    }
    default: return state;
  }
}

export type ShowToggleReducer =  ShowSettingsAC | HideSettingsAC

type ShowSettingsAC = ReturnType<typeof showSettingsAC>

export const showSettingsAC = () => {
  return {
    type: 'SHOW-SETTINGS'
  } as const
}

type HideSettingsAC = ReturnType<typeof hideSettingsAC>

export const hideSettingsAC = () => {
  return {
    type: 'HIDE-SETTINGS',
  } as const
}

export const showSettingsTC = (): AppThunk => (dispatch) => {
  dispatch(showSettingsAC())
}

export const hideSettingsTC = (): AppThunk => (dispatch) => {
  dispatch(hideSettingsAC())
}