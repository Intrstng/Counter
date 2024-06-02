import { setInputErrorAC, SetInputErrorInitType, setInputErrorReducer, unsetInputErrorAC } from './input-error-reducer';

// ------------------- 'SET / UNSET INPUT ERROR' ------------------- //

test ('input-error-reducer should set / unset setError error (set / unset input error)', () => {
  // data
  const inputErrorState: SetInputErrorInitType = {
    error: false
  }
  // action
  const newInputErrorState_1 = setInputErrorReducer(inputErrorState, setInputErrorAC());
  const newInputErrorState_2 = setInputErrorReducer(inputErrorState, unsetInputErrorAC());
  // expectation
  expect(inputErrorState.error).toBe(false);
  expect(newInputErrorState_1.error).toBe(true);
  expect(newInputErrorState_2.error).toBe(false);
})