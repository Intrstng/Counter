import React, {FC} from 'react';
import S from './View.module.css';

type ViewPropsType = {
    value: number
    maxValue: number
    startValue: number
}

export const View: FC<ViewPropsType> = ({value,
                                         maxValue,
                                         startValue
}) => {
    const finalClassList: string = `${S.primary}
                                    ${value === maxValue && S.overlimit}
                                    ${maxValue === startValue && S.message}
                                    `
  const message = maxValue === startValue
                    ? `To enter settings menu press 'set'`
                    : value;
    return (
        <div className={S.view}>
            <span className={finalClassList}>{message}</span>
        </div>
    );
};