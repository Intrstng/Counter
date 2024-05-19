import React, {FC} from 'react';
import {Button} from '../Button';
import S from './Controller.module.css';

type ControllerPropsType = {
    counter: number
    maxValue: number
    startValue: number
    inputError: boolean
    setDataToLocalStorage: () => void
    increaseCounter: () => void
    resetCounter: () => void
}

export const Controller: FC<ControllerPropsType> = (
    {
        counter,
        maxValue,
        startValue,
        inputError,
        setDataToLocalStorage,
        increaseCounter,
        resetCounter
    }) => {
    return (
      <div className={S.controller}>
        <Button isDisabled={inputError || !(counter < maxValue)}
                callback={increaseCounter}
                name={'inc'}
                classList={S.btn}/>
        <Button isDisabled={inputError || counter === startValue}
                callback={resetCounter}
                name={'reset'}
                classList={S.btn}/>
        <Button isDisabled={false}
                callback={setDataToLocalStorage}
                name={'set'}
                classList={S.btn}/>
      </div>
    );
};