import React, {FC} from 'react';

export type ButtonPropsType = {
    name: string
    removeTask?: () => void
}

export const Button: FC<ButtonPropsType> = ({removeTask, name}) => {
    return <button onClick={removeTask}>{name}</button>
}