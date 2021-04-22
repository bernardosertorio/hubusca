import styled from 'styled-components';
import { shade } from 'polished';

export const FormSearcherStyles = styled.div`
  margin-top: 80px;
  max-width: 700px;

  form {
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    button {
      width: 210px;
      height: 70px;
      background: #04d361;
      border-radius: 0px 5px 5px 0px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
