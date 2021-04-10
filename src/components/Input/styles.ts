import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  border: 0;
  background: #FFFF;
  border-radius: 5px 0 0 5px;

  display: flex;
  align-items: center; 

  input {
    flex: 1;
    border: 0;
    height: 70px;
    padding: 0 24px;
    
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  svg {
    margin-right: 10px;
  }
`;