import styled from 'styled-components';

export const UserRepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 30px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color:#FFFFFF ;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #FFFFFF;
      }
    }
  }
`;

export const RepositoriesList = styled.section`
  margin-top: 80px;

  a {
    background: #7CFC00;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
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
        color: #cbcbd6;
    }
  }
`;