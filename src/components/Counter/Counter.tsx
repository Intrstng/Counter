import React from 'react';
import { View } from '../View/View';
import { Controller } from '../Controller/Controller';
import { useAppSelector } from '../../app/hooks';


export const Counter = () => {
  const counter = useAppSelector( (state) => state.counter.currentValue );
  const maxValue = useAppSelector( (state) => state.maxValue.currentMaxValue );
  const startValue = useAppSelector( (state) => state.startValue.currentStartValue );
  const inputError = useAppSelector( (state) => state.setError.error );
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

