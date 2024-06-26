import React, { FC } from 'react';
import S from './SettingsController.module.css';
import { Button } from '../Button';
import { setCounterTC } from '../bll/counter-reducer';
import { hideSettingsTC } from '../bll/show-settings-reducer';
import { useAppDispatch } from '../../app/hooks';

type SettingsController = {
  maxValue: number
  startValue: number
  inputError: boolean
}

export type StateToLocalStorage = {
    maxValue: {
        currentMaxValue: number
    },
    setError: {
        error: boolean
    },
    showSettings: {
        flag: boolean
    },
    startValue: {
        currentStartValue: number
    },
}

export const SettingsController: FC<SettingsController> = ({ maxValue,
                                                             startValue,
                                                             inputError}) => {
  const dispatch = useAppDispatch();

  const onClickSetDataHandler = () => {
    const newState: StateToLocalStorage = {
        maxValue: {
            currentMaxValue: maxValue,
        },
        setError: {
            error: inputError,
        },
        showSettings: {
            flag: false,
        },
        startValue: {
            currentStartValue: startValue,
        },
    }
        dispatch(setCounterTC(newState));
        dispatch(hideSettingsTC());
  }
    return (
        <div className={S.settingsController}>
            <Button isDisabled={maxValue === startValue || inputError}
                    callback={onClickSetDataHandler}
                    name={'set'}
                    classList={S.btn}/>
        </div>
    );
};