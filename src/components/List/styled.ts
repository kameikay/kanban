import styled from "styled-components";

export const Container = styled.div`
  background-color: #ebecf0;
  border-radius: 4px;
  margin: 0 0.5rem;
  padding: 0.5rem;
  flex: 0 0 20rem;
  height: fit-content;

  header {
    margin-bottom: 1rem;
    h2 {
      font-size: 1rem;
    }

    small {
      font-size: 14px;
      color: #5e6c84;
    }
  }

  > button {
    width: 100%;
    margin-top: .5rem;
    color: #6b778c;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    border: none;
    padding: 0.5rem;

    span {
      margin-left: 4px;
      font-size: 14px;
    }

    &:hover {
      color: #172b4d;
      background-color: #00000014;
    }
  }
`;