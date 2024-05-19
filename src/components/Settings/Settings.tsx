import React, {FC} from 'react';
import {SettingsController} from '../SettingsController/SettingsController';
import { SettingsInterface } from '../SettingsInterface/SettingsInterface';

type SettingsPropsType = {
    maxValue: number
    startValue: number
    isSetBtnDisabled: boolean
    inputError: boolean
    setMaxValueInput: (value: number) => void
  setStartValueInput: (value: number) => void
    setInputError: (value: boolean) => void
    setDataToLocalStorage: () => void
}

export const Settings: FC<SettingsPropsType> = ({   maxValue,
                                                    startValue,
                                                    isSetBtnDisabled,
                                                    inputError,
                                                    setMaxValueInput,
                                                    setStartValueInput,
                                                    setInputError,
                                                    setDataToLocalStorage
}) => {

    return (
        <div className={'widget'}>
            <SettingsInterface maxValue={maxValue}
                               startValue={startValue}
                               inputError={inputError}
                               setMaxValueInput={setMaxValueInput}
                               setStartValueInput={setStartValueInput}
                               setInputError={setInputError}/>
            <SettingsController isSetBtnDisabled={isSetBtnDisabled}
                                inputError={inputError}
                                setDataToLocalStorage={setDataToLocalStorage} />
        </div>
    );
};