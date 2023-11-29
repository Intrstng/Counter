import React, {FC} from 'react';
import styled from 'styled-components';

export type ButtonPropsType = {
    name: string
    isDisabled: boolean
    callback: () => void
}

export const Button: FC<ButtonPropsType> = ( { name,
                                               isDisabled,
                                               callback } ) => {
    return (
        <ButtonContent onClick={callback}
                        disabled={isDisabled}>
            {name}
        </ButtonContent>
    )
}

const ButtonContent = styled.button `
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #65cff4;
  font-size: 20px;
  font-family: 'Comic Sans MS';
  cursor: pointer;
`