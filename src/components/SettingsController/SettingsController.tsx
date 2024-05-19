import React, { FC } from 'react';
import S from './SettingsController.module.css';
import {Button} from '../Button';

type SettingsController = {
  isSetBtnDisabled: boolean
  inputError: boolean
  setDataToLocalStorage: () => void
}

export const SettingsController: FC<SettingsController> = ({isSetBtnDisabled,
                                                            inputError,
                                                            setDataToLocalStorage}) => {
    return (
        <div className={S.settingsController}>
            <Button isDisabled={isSetBtnDisabled || inputError}
                    callback={setDataToLocalStorage}
                    name={'set'}
                    classList={S.btn}/>
        </div>
    );
};