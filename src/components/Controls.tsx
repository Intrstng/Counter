import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Button, ButtonPropsType} from './Button';

type ControlsPropsType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
}

export const Controls: FC<ControlsPropsType> = ( {counter,
                                                  increaseCounter,
                                                  resetCounter} ) => {
    const onclickIncreaseCounterHandler = () => increaseCounter();
    const onclickResetCounterHandler = () => resetCounter();

    return (
        <ControlsContent >
            <Button isDisabled={!(counter < 5)}
                    callback={onclickIncreaseCounterHandler}
                    name={'inc'}
            />
            <Button isDisabled={counter === 0}
                    callback={onclickResetCounterHandler}
                    name={'reset'}
            />
        </ControlsContent>
    );
};

const ControlsContent = styled.div `
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #385f5d;
  border-radius: 20px;
`