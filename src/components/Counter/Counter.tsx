import React, {FC} from 'react';
import {View} from '../View/View';
import {Controller} from '../Controller/Controller';
import S from './Counter.module.css';

type CounterPropsType = {
    counter: number
    maxValue: number
    startValue: number
    inputError: boolean
    setDataToLocalStorage: () => void
    increaseCounter: () => void
    resetCounter: () => void
}

export const Counter: FC<CounterPropsType> = ({
                                                  counter,
                                                  maxValue,
                                                  startValue,
                                                  increaseCounter,
                                                  resetCounter,
                                                  inputError,
                                                  setDataToLocalStorage

}) => {
    return (
      <div className={'widget'}>
          <View value={counter}
                maxValue={maxValue}
                startValue={startValue}/>
          <Controller counter={counter}
                      maxValue={maxValue}
                      startValue={startValue}
                      inputError={inputError}
                      setDataToLocalStorage={setDataToLocalStorage}
                      increaseCounter={increaseCounter}
                      resetCounter={resetCounter}/>
      </div>
    );
};

