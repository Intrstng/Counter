import React from 'react';
import { SettingsController } from '../SettingsController/SettingsController';
import { SettingsInterface } from '../SettingsInterface/SettingsInterface';
import { useSelector } from 'react-redux';
import { AppRootState } from '../bll/store';

export const Settings = () => {
  const maxValue = useSelector<AppRootState, number>( (state) => state.maxValue.currentMaxValue );
  const startValue = useSelector<AppRootState, number>( (state) => state.startValue.currentStartValue );
  const inputError = useSelector<AppRootState, boolean>( (state) => state.setError.error );
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