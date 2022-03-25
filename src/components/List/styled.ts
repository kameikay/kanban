import { darken } from "polished";
import styled, { css } from "styled-components";

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

  .editing {
    textarea {
      width: 100%;
      min-height: 3rem;
      font-size: 14px;
      padding: 6px 8px 2px;
      resize: none;
      border: none;
      border-radius: 4px;
      outline: none;
      overflow-wrap: break-word;
      box-shadow: 0 1px 0 #091e4240;
      &:focus {
        color: #172b4d;
      }
    }

    .editing-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 0.5rem;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-size: 14px;
        border: none;
        border-radius: 4px;
      }

      .add-card {
        color: #fff;
        background-color: #0079bf;

        &:hover {
          background-color: ${darken(0.1, "#0079bf")};
        }
      }

      .close-editing {
        color: #5e6c84;

        &:hover {
          color: #172b4d;
        }
      }
    }
  }
`;
