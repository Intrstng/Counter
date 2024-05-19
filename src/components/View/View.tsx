import React, {FC} from 'react';
import S from './View.module.css';

type ViewPropsType = {
    value: number
    maxValue: number
    startValue: number
    counterMsg: boolean
    inputError: boolean
}

export const View: FC<ViewPropsType> = ({value,
                                         maxValue,
                                         startValue,
                                         counterMsg,
                                          inputError
}) => {
    const finalClassList: string = `${S.primary}
                                    ${value === maxValue && S.overlimit}
                                    ${(maxValue === startValue || !counterMsg) && S.message}
                                    ${inputError && S.error}
                                    `
  const message = inputError
                  ? 'Incorrect value!'
                  : (maxValue === startValue || !counterMsg)
                    ? 'Enter values and press set'
                    : value;
    return (
        <div className={S.view}>
            <span className={finalClassList}>{message}</span>
        </div>
    );
};