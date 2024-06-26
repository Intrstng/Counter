import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { CounterReducer, counterReducer } from './counter-reducer';
import { maxValueReducer, SetMaxValueAC } from './max-value-reducer';
import { SetStartValueAC, startValueReducer } from './start-value-reducer';
import { showSettingsReducer, ShowToggleReducer } from './show-settings-reducer';
import { InputErrorSetterReducer, setInputErrorReducer } from './input-error-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  maxValue: maxValueReducer,
  startValue: startValueReducer,
  showSettings: showSettingsReducer,
  setError: setInputErrorReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
type AppActionsType = SetStartValueAC
                      | SetMaxValueAC
                      | ShowToggleReducer
                      | InputErrorSetterReducer
                      | CounterReducer
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>

Object.defineProperty(window, 'store', {
  value: store,
  writable: true,
});