import { CounterInitType, counterReducer, increaseCounterAC, resetCounterAC, setCounterAC } from './counter-reducer';

// ------------------- 'SET-COUNTER' ------------------- //

test ('counter-reducer should set new counter', () => {
  // data
  const initCounterValue = 0;

  const counterState: CounterInitType = {
    currentValue: initCounterValue
  }
  const counterValue_1 = 5;
  const counterValue_2 = 10;

  // action
  const newCounterState_1 = counterReducer(counterState, setCounterAC(counterValue_1));
  const newCounterState_2 = counterReducer(counterState, setCounterAC(counterValue_2));

  // expectation
  expect(counterState.currentValue).toBe(initCounterValue);
  expect(newCounterState_1.currentValue).toBe(counterValue_1);
  expect(newCounterState_2.currentValue).toBe(counterValue_2);
})


// ------------------- 'INCREASE-COUNTER' ------------------- //

test ('counter-reducer should increase counter', () => {
  // data
  const initCounterValue = 0;

  const counterState: CounterInitType = {
    currentValue: initCounterValue
  }
  const counterValue_1 = 1;
  const counterValue_2 = 2;

  // action
  const newCounterState_1 = counterReducer(counterState, increaseCounterAC());
  const newCounterState_2 = counterReducer(newCounterState_1, increaseCounterAC());

  // expectation
  expect(counterState.currentValue).toBe(initCounterValue);
  expect(newCounterState_1.currentValue).toBe(counterValue_1);
  expect(newCounterState_2.currentValue).toBe(counterValue_2);
})


// ------------------- 'RESET-COUNTER' ------------------- //

test ('counter-reducer should reset counter', () => {
  // data
  const initCounterValue = 10;

  const counterState: CounterInitType = {
    currentValue: initCounterValue
  }
  const counterValue_1 = 5;
  const counterValue_2 = 3;

  // action
  const newCounterState_1 = counterReducer(counterState, resetCounterAC(counterValue_1));
  const newCounterState_2 = counterReducer(counterState, resetCounterAC(counterValue_2));

  // expectation
  expect(counterState.currentValue).toBe(initCounterValue);
  expect(newCounterState_1.currentValue).toBe(counterValue_1);
  expect(newCounterState_2.currentValue).toBe(counterValue_2);
})