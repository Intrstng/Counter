import React, { FC } from 'react';
import S from './SettingsController.module.css';
import {Button} from '../Button';

type SettingsController = {
  maxValue: number
  startValue: number
  inputError: boolean
  setDataToLocalStorage: () => void
}

export const SettingsController: FC<SettingsController> = ({ maxValue,
                                                             startValue,
                                                             inputError,
                                                             setDataToLocalStorage}) => {
    return (
        <div className={S.settingsController}>
            <Button isDisabled={maxValue === startValue || inputError}
                    callback={setDataToLocalStorage}
                    name={'set'}
                    classList={S.btn}/>
        </div>
    );
};