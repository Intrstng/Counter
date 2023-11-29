// На Styled components:

import React, {FC} from 'react';
import styled, { css } from 'styled-components';

type ScreenPropsType = {
    value: number
}

export const Screen: FC<ScreenPropsType> = ({value}) => {
    return (
        <ScreenContent value={value}>
            <CounterDigit>{value}</CounterDigit>
        </ScreenContent>
    );
};


const ScreenContent = styled.div<ScreenPropsType> `
  ${props => props.value === 5 && css<ScreenPropsType> `
     color: red;
  `};

  margin: 0 auto 20px;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #385f5d;
  border-radius: 20px;
  background-color: #65cff4;
`

const CounterDigit = styled.span `
  font-size: 40px;
  font-family: 'Comic Sans MS';
`


