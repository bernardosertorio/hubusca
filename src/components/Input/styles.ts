import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  border: 0;
  background: #FFFF;
  border-radius: 5px 0 0 5px;

  border: 2px #232129;
  color: #666360;

  flex: 1;
  align-items: center;

  ${props => props.isFocused && css`
    color: #008000;
    border-color: #008000;
  `}

  ${props => props.isFilled && css`
    color: #008000;
  `}


  svg {
    flex: 1;
    margin-left: 0px;
  }

  input {
    flex: 3;
    border: 0;
    height: 70px;
    padding: 0 30px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  } 
`;