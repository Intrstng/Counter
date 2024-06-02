import React from 'react';
import { View } from '../View/View';
import { Controller } from '../Controller/Controller';
import { useSelector } from 'react-redux';
import { AppRootState } from '../bll/store';


export const Counter = () => {
  const counter = useSelector<AppRootState, number>( (state) => state.counter.currentValue );
  const maxValue = useSelector<AppRootState, number>( (state) => state.maxValue.currentMaxValue );
  const startValue = useSelector<AppRootState, number>( (state) => state.startValue.currentStartValue );
  const inputError = useSelector<AppRootState, boolean>( (state) => state.setError.error );
    return (
      <div className={'widget'}>
          <View value={counter}
                maxValue={maxValue}
                startValue={startValue}/>
          <Controller counter={counter}
                      maxValue={maxValue}
                      startValue={startValue}
                      inputError={inputError}/>
      </div>
    );
};

