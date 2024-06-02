import React, { FC } from 'react';
import { Button } from '../Button';
import S from './Controller.module.css';
import { increaseCounterAC, resetCounterAC } from '../bll/counter-reducer';
import { useDispatch } from 'react-redux';
import { showSettingsAC } from '../bll/show-settings-reducer';

type ControllerPropsType = {
    counter: number
    maxValue: number
    startValue: number
    inputError: boolean
}

export const Controller: FC<ControllerPropsType> = (
    {
        counter,
        maxValue,
        startValue,
        inputError
    }) => {
  const dispatch = useDispatch();
  const increaseCounter = () => counter < maxValue && dispatch(increaseCounterAC());
  const resetCounter = () => dispatch(resetCounterAC(startValue));
  const onClickShowSettingsHandler = () => dispatch(showSettingsAC());

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
                callback={onClickShowSettingsHandler}
                name={'set'}
                classList={S.btn}/>
      </div>
    );
};