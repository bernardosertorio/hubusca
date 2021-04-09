import styled from 'styled-components';

export const Container = styled.header`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 60px;

  a {
    display: flex; 
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2;

    &:hover {
      color: #666;
    }
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 50px; 
  }
`;