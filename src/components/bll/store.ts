import {combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { counterReducer } from './counter-reducer';
import { maxValueReducer } from './max-value-reducer';
import { startValueReducer } from './start-value-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  maxValue: maxValueReducer,
  startValue: startValueReducer
});

export type AppRootState = ReturnType<typeof rootReducer>

// createStore deprecated change to -> configureStore
// import { legacy_createStore as createStore } from 'redux';
export const store = createStore(rootReducer);

export type AppStoreType = typeof store // ??????


Object.defineProperty(window, 'store', {
  value: store,
  writable: true,
});