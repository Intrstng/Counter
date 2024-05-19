import React, {FC} from 'react';
import {View} from '../View/View';
import {Controller} from '../Controller/Controller';
import S from './Counter.module.css';

type CounterPropsType = {
    counter: number
    maxValue: number
    startValue: number
    counterMsg: boolean
    inputError: boolean
    increaseCounter: () => void
    resetCounter: () => void
}

export const Counter: FC<CounterPropsType> = ({
                                                  counter,
                                                  maxValue,
                                                  startValue,
                                                  counterMsg,
                                                  increaseCounter,
                                                  resetCounter,
                                                  inputError
}) => {
    return (
        <div className={'widget'}>
            <View value={counter}
                  counterMsg={counterMsg}
                  maxValue={maxValue}
                  startValue={startValue}
                  inputError={inputError}/>
            <Controller counter={counter}
                        maxValue={maxValue}
                        startValue={startValue}
                        inputError={inputError}
                        increaseCounter={increaseCounter}
                        resetCounter={resetCounter}/>
        </div>
    );
};