import React, {FC} from 'react';
import {SettingsController} from '../SettingsController/SettingsController';
import { SettingsInterface } from '../SettingsInterface/SettingsInterface';

type SettingsPropsType = {
    maxValue: number
    startValue: number
    inputError: boolean
    setMaxValueInput: (value: number) => void
    setStartValueInput: (value: number) => void
    setInputError: (value: boolean) => void
    setDataToLocalStorage: () => void
}

export const Settings: FC<SettingsPropsType> = ({   maxValue,
                                                    startValue,
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
            <SettingsController maxValue={maxValue}
                                startValue={startValue}
                                inputError={inputError}
                                setDataToLocalStorage={setDataToLocalStorage}/>
        </div>
    );
};