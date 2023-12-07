import React, {FC} from 'react';
import S from './View.module.css';

type ViewPropsType = {
    value: number
}

export const View: FC<ViewPropsType> = ({value}) => {
    const finalClassList: string = `${S.primary}
                                    ${value === 5 && S.overlimit}
                                    `
    return (
        <div className={S.view}>
            <span className={finalClassList}>{value}</span>
        </div>
    );
};