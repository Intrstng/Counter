import React, { useEffect } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Settings } from './components/Settings/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './components/bll/store';
import { setCounterAC } from './components/bll/counter-reducer';

export const App = () => {
    const dispatch = useDispatch();
    const startValue = useSelector<AppRootState, number>( (state) => state.startValue.currentStartValue );
    const showSettings = useSelector<AppRootState, boolean>( (state) => state.showSettings.flag );

    useEffect(() => {
        dispatch(setCounterAC(startValue));
    }, []);

    return (
      <div className="App">
          {!showSettings ? <Counter />
                         : <Settings />
          }
      </div>
    );
}