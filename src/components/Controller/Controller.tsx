import React, { FC } from 'react';
import { Button } from '../Button';
import S from './Controller.module.css';
import { increaseCounterTC, resetCounterTC } from '../bll/counter-reducer';
import { showSettingsTC } from '../bll/show-settings-reducer';
import { useAppDispatch } from '../../app/hooks';

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
  const dispatch = useAppDispatch();
  const increaseCounter = () => counter < maxValue && dispatch(increaseCounterTC());
  const resetCounter = () => dispatch(resetCounterTC());
  const onClickShowSettingsHandler = () => dispatch(showSettingsTC());

    return (
      <div className={S.controller}>
        <Button isDisabled={inputError || !(counter < maxValue)}
                callback={increaseCounter}
                name={'inc'}
                classList={S.btn}/>
        <Button isDisabled={inputError || !(counter <= maxValue) || counter === startValue}
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