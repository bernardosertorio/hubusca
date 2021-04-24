import styled from 'styled-components';

export const RepositoryStyles = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    .delete-container {
    margin-top: auto;
    padding: 1px 1px 150px;
    border: 0;
    background: transparent;

    svg {
        margin-left: auto;
        color: black;
      }
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
  }
`;
