import React, {ChangeEvent, FC} from 'react';
import S from './SettingsInterface.module.css';
import {Input} from '../Input/Input';
import { setMaxValueAC } from '../bll/max-value-reducer';
import { setStartValueAC } from '../bll/start-value-reducer';
import { useDispatch } from 'react-redux';
import { setInputErrorAC, unsetInputErrorAC } from '../bll/input-error-reducer';

type SettingsInterfacePropsType = {
    maxValue: number
    startValue: number
    inputError: boolean
}

export const SettingsInterface: FC<SettingsInterfacePropsType> = ({ maxValue,
                                                                    startValue,
                                                                    inputError
}) => {
    const dispatch = useDispatch();
    const setMaxValueInput = (value: number) => dispatch(setMaxValueAC(value));
    const setStartValueInput = (value: number) => dispatch(setStartValueAC(value));

    const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if ((Number(e.currentTarget.value) < 0 || startValue < 0)
          || Number(e.currentTarget.value) <= startValue
      ) {
        dispatch(setInputErrorAC())
      } else dispatch(unsetInputErrorAC())
      setMaxValueInput(Number(e.currentTarget.value));
    }
    const onChangeMinValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if ((Number(e.currentTarget.value) < 0 || maxValue < 0)
          || Number(e.currentTarget.value) >= maxValue
      ) {
        dispatch(setInputErrorAC())
      } else dispatch(unsetInputErrorAC())
      setStartValueInput(Number(e.currentTarget.value));
    }

    return (
        <div className={S.settingsView}>
            <Input id={'maxValueInp'}
                   title={'max value:'}
                   value={maxValue}
                   inputError={inputError}
                   onChangeCallback={onChangeMaxValueInputHandler}/>
            <Input id={'minValueInp'}
                   title={'min value:'}
                   value={startValue}
                   inputError={inputError}
                   onChangeCallback={onChangeMinValueInputHandler}/>
        </div>
    );
};