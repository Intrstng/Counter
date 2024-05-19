import React, {useState, useEffect} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

export const App = () => {
    // const [maxValue, setMaxValue] = useState<number>(() => {
    //     if (localStorage.hasOwnProperty('values')) {
    //         const dataFromLocalStorage = localStorage.getItem('values');
    //         return dataFromLocalStorage && JSON.parse(dataFromLocalStorage).maxValue
    //     }
    //     return 0;
    // });
    // const [startValue, setStartValue] = useState<number>(() => {
    //     if (localStorage.hasOwnProperty('values')) {
    //         const dataFromLocalStorage = localStorage.getItem('values');
    //         return dataFromLocalStorage && JSON.parse(dataFromLocalStorage).startValue
    //     }
    //     return 0;
    // });
    const [maxValue, setMaxValue] = useState<number>(0); // or use this
    const [startValue, setStartValue] = useState<number>(0); // or use this
    const [counter, setCounter] = useState<number>(startValue);
    const [isSetBtnDisabled, setIsSetBtnDisabled] = useState<boolean>(true);
    const [inputError, setInputError] = useState<boolean>(false);

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
        setIsSetBtnDisabled(false);
    }
    const setStartValueInput = (value: number) => {
        setStartValue(value);
        setIsSetBtnDisabled(false);
    }
    const setDataToLocalStorage = () => {
        const values = {
            maxValue,
            startValue
        }
        if (!inputError) {
            setCounter(startValue);
            setIsSetBtnDisabled(true);
            localStorage.setItem('values', JSON.stringify(values));
        }
    }

    return (
        <div className="App">
            <Settings isSetBtnDisabled={isSetBtnDisabled}
                      maxValue={maxValue}
                      startValue={startValue}
                      inputError={inputError}
                      setMaxValueInput={setMaxValueInput}
                      setStartValueInput={setStartValueInput}
                      setInputError={setInputError}
                      setDataToLocalStorage={setDataToLocalStorage}
            />
            <Counter counter={counter}
                     maxValue={maxValue}
                     startValue={startValue}
                     inputError={inputError}
                     counterMsg={isSetBtnDisabled}
                     increaseCounter={increaseCounter}
                     resetCounter={resetCounter}/>
        </div>
    );
}