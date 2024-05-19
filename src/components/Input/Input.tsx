import React, {ChangeEvent, FC} from 'react';
import S from './Input.module.css';

type InputPropsType = {
    id: string
    title: string
    value: number
    inputError: boolean
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputPropsType> = ({id,
                                           title,
                                           value,
                                            inputError,
                                           onChangeCallback}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeCallback(e);

    const finalClassList: string = `${S.inputField}
                                    ${inputError && S.error}
                                    `
    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <input type='number'
                   className={finalClassList}
                   id={id}
                   name={id}
                   value={value}
                   onChange={onChangeHandler}/>
        </div>
    );
};