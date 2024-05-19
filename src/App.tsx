import React, {useState, useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

export const App = () => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [counter, setCounter] = useState<number>(startValue);
    const [inputError, setInputError] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.hasOwnProperty('values')) {
            const dataFromLocalStorage = localStorage.getItem('values');
            const {
                maxValue: maxValueFromLocalStorage,
                startValue: startValueFromLocalStorage
            } = dataFromLocalStorage && JSON.parse(dataFromLocalStorage);
            setMaxValue(maxValueFromLocalStorage);
            setStartValue(startValueFromLocalStorage);
            setCounter(startValueFromLocalStorage);
        }
    }, []);

    const increaseCounter = () => {
        counter < maxValue && setCounter(prevCounter => prevCounter + 1);
    }
    const resetCounter = () => {
        setCounter(startValue);
    }
    const setMaxValueInput = (value: number) => {
        setMaxValue(value);
    }
    const setStartValueInput = (value: number) => {
        setStartValue(value);
    }
    const setDataToLocalStorage = () => {
        const values = {
            maxValue,
            startValue
        }
        setCounter(startValue);
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