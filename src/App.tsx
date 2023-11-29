import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {Screen} from './components/Screen';
import {Controls} from './components/Controls';

function App() {
    let [counter, setCounter] = useState<number>(0);
    const increaseCounter = () => {
        counter < 5 && setCounter(++counter);
    }
    const resetCounter = () => {
        setCounter(0);
    }
    return (
        <AppContent className="App">
            <Screen value={counter}/>
            <Controls counter={counter}
                      increaseCounter={increaseCounter}
                      resetCounter={resetCounter}/>
        </AppContent>
    );
}

export default App;


const AppContent = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid #385f5d;
  border-radius: 20px;
`