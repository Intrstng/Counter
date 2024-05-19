import React, {ChangeEvent, FC} from 'react';
import S from './SettingsInterface.module.css';
import {Input} from '../Input/Input';

type SettingsInterfacePropsType = {
    maxValue: number
    startValue: number
    inputError: boolean
    setMaxValueInput: (value: number) => void
    setStartValueInput: (value: number) => void
    setInputError: (value: boolean) => void
}

export const SettingsInterface: FC<SettingsInterfacePropsType> = ({   maxValue,
                                                                      startValue,
                                                                      inputError,
                                                                      setMaxValueInput,
                                                                      setStartValueInput,
                                                                      setInputError
}) => {
    const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if ((Number(e.currentTarget.value) < 0 || startValue < 0)
          || Number(e.currentTarget.value) <= startValue
      ) {
        setInputError(true)
      } else setInputError(false)
      setMaxValueInput(Number(e.currentTarget.value));
    }
    const onChangeMinValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if ((Number(e.currentTarget.value) < 0 || maxValue < 0)
          || Number(e.currentTarget.value) >= maxValue
      ) {
        setInputError(true)
      } else setInputError(false)
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