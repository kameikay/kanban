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

    input {
      padding: 4px;
      width: 100%;
      font-size: 1rem;
      cursor: pointer;
      display: block;
      background-color: transparent;
      border: none;
      border-radius: 4px;
      outline: none;

      &:focus {
        box-shadow: inset 0 0 0 2px #0079bf;
        background-color: #fff;
      }
    }

    small {
      font-size: 14px;
      color: #5e6c84;
      padding: 0 4px;

    }
  }

  > button {
    width: 100%;
    margin-top: 0.5rem;
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
