import { MaxValueInitType, maxValueReducer, setMaxValueAC } from './max-value-reducer';

// ------------------- 'SET-MAX-VALUE' ------------------- //

test ('max-value-reducer should set new max value', () => {
  // data
  const maxValueState: MaxValueInitType = {
    currentMaxValue: 0
  }
  const maxValue_1 = 5;
  const maxValue_2 = 10;

  // action
  const newStartValueState_1 = maxValueReducer(maxValueState, setMaxValueAC(maxValue_1));
  const newStartValueState_2 = maxValueReducer(maxValueState, setMaxValueAC(maxValue_2));

  // expectation
  expect(maxValueState.currentMaxValue).toBe(0);
  expect(newStartValueState_1.currentMaxValue).toBe(maxValue_1);
  expect(newStartValueState_2.currentMaxValue).toBe(maxValue_2);
})