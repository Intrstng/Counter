import React, {useState} from 'react';
import './App.css';
import {View} from './components/View/View';
import {Controller} from './components/Controller/Controller';

export const App = () => {
    const [counter, setCounter] = useState<number>(0);

    const increaseCounter = () => {
        counter < 5 && setCounter(counter + 1);
    }
    const resetCounter = () => {
        setCounter(0);
    }
    return (
        <div className="App">
            <View value={counter}/>
            <Controller counter={counter}
                        increaseCounter={increaseCounter}
                        resetCounter={resetCounter}/>
        </div>
    );
}