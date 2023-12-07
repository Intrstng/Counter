import React, {FC} from 'react';

export type ButtonPropsType = {
    name: string
    isDisabled?: boolean
    classList: string
    callback: () => void
}

export const Button: FC<ButtonPropsType> = ( { name,
                                               classList,
                                               isDisabled,
                                               callback } ) => {
    return (
        <button className={classList}
                disabled={isDisabled}
                onClick={callback}>
            {name}
        </button>
    )
}