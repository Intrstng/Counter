import React from 'react';
import { SettingsController } from '../SettingsController/SettingsController';
import { SettingsInterface } from '../SettingsInterface/SettingsInterface';
import { useAppSelector } from '../../app/hooks';

export const Settings = () => {
  const maxValue = useAppSelector( (state) => state.maxValue.currentMaxValue );
  const startValue = useAppSelector( (state) => state.startValue.currentStartValue );
  const inputError = useAppSelector( (state) => state.setError.error );

    return (
        <div className={'widget'}>
            <SettingsInterface maxValue={maxValue}
                               startValue={startValue}
                               inputError={inputError}/>
            <SettingsController maxValue={maxValue}
                                startValue={startValue}
                                inputError={inputError}/>
        </div>
    );
};