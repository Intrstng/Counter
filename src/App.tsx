import React, { useEffect } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Settings } from './components/Settings/Settings';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setDataFromLocalStorageToStateTC } from './components/bll/data-reducer';

export const App = () => {
    const dispatch = useAppDispatch();
    const showSettings = useAppSelector( (state) => state.showSettings.flag );

    useEffect(() => {
        dispatch(setDataFromLocalStorageToStateTC())
    }, []);

    return (
      <div className="App">
          {!showSettings ? <Counter />
                         : <Settings />
          }
      </div>
    );
}