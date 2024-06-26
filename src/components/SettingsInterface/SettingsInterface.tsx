import React, { ChangeEvent, FC } from 'react';
import S from './SettingsInterface.module.css';
import { Input } from '../Input/Input';
import { setMaxValueTC } from '../bll/max-value-reducer';
import { setStartValueTC } from '../bll/start-value-reducer';
import { setInputErrorTC, unsetInputErrorTC } from '../bll/input-error-reducer';
import { useAppDispatch } from '../../app/hooks';

type SettingsInterfacePropsType = {
    maxValue: number
    startValue: number
    inputError: boolean
}

export const SettingsInterface: FC<SettingsInterfacePropsType> = ({ maxValue,
                                                                    startValue,
                                                                    inputError
}) => {
    const dispatch = useAppDispatch();
    const setMaxValueInput = (value: number) => dispatch(setMaxValueTC(value));
    const setStartValueInput = (value: number) => dispatch(setStartValueTC(value));

    const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if ((Number(e.currentTarget.value) < 0 || startValue < 0)
          || Number(e.currentTarget.value) <= startValue
      ) {
        dispatch(setInputErrorTC())
      } else dispatch(unsetInputErrorTC())
      setMaxValueInput(Number(e.currentTarget.value));
    }
    const onChangeMinValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if ((Number(e.currentTarget.value) < 0 || maxValue < 0)
          || Number(e.currentTarget.value) >= maxValue
      ) {
        dispatch(setInputErrorTC())
      } else dispatch(unsetInputErrorTC())
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