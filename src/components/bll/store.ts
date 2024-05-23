import {combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { counterReducer } from './counter-reducer';
import { maxValueReducer } from './max-value-reducer';
import { startValueReducer } from './start-value-reducer';
import { loadState, saveState } from './localStorage';
import {throttle} from 'lodash'

const rootReducer = combineReducers({
  counter: counterReducer,
  maxValue: maxValueReducer,
  startValue: startValueReducer
});

const persistedState = loadState(); // added

export type AppRootState = ReturnType<typeof rootReducer>

// createStore deprecated change to -> configureStore
// import { legacy_createStore as createStore } from 'redux';
export const store = createStore(rootReducer, persistedState);

export type AppStoreType = typeof store // ??????

store.subscribe(throttle(() => { // added
  saveState({
    counter: store.getState().counter,
    maxValue: store.getState().maxValue,
    startValue: store.getState().startValue
  });
}, 1000));


Object.defineProperty(window, 'store', {
  value: store,
  writable: true,
});