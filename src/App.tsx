import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from './components/bll/store';
import { increaseCounterAC, resetCounterAC, setCounterAC } from './components/bll/counter-reducer';
import { setMaxValueAC } from './components/bll/max-value-reducer';
import { setStartValueAC } from './components/bll/start-value-reducer';


export const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector<AppRootState, number>( (state) => state.counter.currentValue );
    const maxValue = useSelector<AppRootState, number>( (state) => state.maxValue.currentMaxValue );
    const startValue = useSelector<AppRootState, number>( (state) => state.startValue.currentStartValue );
    const [inputError, setInputError] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);

    const increaseCounter = () => {
        counter < maxValue && dispatch(increaseCounterAC());
    }
    const resetCounter = () => {
        dispatch(resetCounterAC(startValue));
    }
    const setMaxValueInput = (value: number) => {
        dispatch(setMaxValueAC(value));
    }
    const setStartValueInput = (value: number) => {
        dispatch(setStartValueAC(value));
    }
    const setDataToLocalStorage = () => {
        const values = {
            maxValue,
            startValue
        }
        dispatch(setCounterAC(startValue));
        localStorage.setItem('values', JSON.stringify(values));
        !showSettings ? setShowSettings(true) : setShowSettings(false);
    }

    return (
      <div className="App">
          {!showSettings ? <Counter counter={counter}
                                    maxValue={maxValue}
                                    startValue={startValue}
                                    inputError={inputError}
                                    setDataToLocalStorage={setDataToLocalStorage}
                                    increaseCounter={increaseCounter}
                                    resetCounter={resetCounter}/>
                            : <Settings maxValue={maxValue}
                                        startValue={startValue}
                                        inputError={inputError}
                                        setMaxValueInput={setMaxValueInput}
                                        setStartValueInput={setStartValueInput}
                                        setInputError={setInputError}
                                        setDataToLocalStorage={setDataToLocalStorage}/>
          }
      </div>
    );
}