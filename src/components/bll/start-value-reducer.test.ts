import { setStartValueAC, StartValueInitType, startValueReducer } from './start-value-reducer';

// ------------------- 'SET-START-VALUE' ------------------- //

test ('start-value-reducer should set new start value', () => {
  // data
  const startValueState: StartValueInitType = {
    currentStartValue: 0
  }
  const startValue_1 = 5;
  const startValue_2 = 10;

  // action
  const newStartValueState_1 = startValueReducer(startValueState, setStartValueAC(startValue_1));
  const newStartValueState_2 = startValueReducer(startValueState, setStartValueAC(startValue_2));

  // expectation
  expect(startValueState.currentStartValue).toBe(0);
  expect(newStartValueState_1.currentStartValue).toBe(startValue_1);
  expect(newStartValueState_2.currentStartValue).toBe(startValue_2);
})