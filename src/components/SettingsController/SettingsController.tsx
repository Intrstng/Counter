import React, { FC } from 'react';
import S from './SettingsController.module.css';
import { Button } from '../Button';
import { setCounterAC } from '../bll/counter-reducer';
import { useDispatch } from 'react-redux';
import { hideSettingsAC } from '../bll/show-settings-reducer';

type SettingsController = {
  maxValue: number
  startValue: number
  inputError: boolean
}

export const SettingsController: FC<SettingsController> = ({ maxValue,
                                                             startValue,
                                                             inputError}) => {
  const dispatch = useDispatch();
  const onClickSetDataHandler = () => { // use here setDataToLocalStorage
    dispatch(setCounterAC(startValue));
    dispatch(hideSettingsAC());
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