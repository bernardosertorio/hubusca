import styled from 'styled-components';
import { shade } from 'polished';

export const RepositoryStyles = styled.div`
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

  a {
    background: #7CFC00;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    flex-wrap: wrap;
    text-decoration: none;
    margin-top: 80px;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #6B8E23;
        margin-top: 4px;        
      }
    }

    svg {
        margin-left: auto;
        color: black;
    }

    .delete-container {
      margin-top: 8px;
      margin-left: 5px;
      border: 0;
      background: transparent;

      svg {
          margin-left: auto;
          color: black;
        }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
