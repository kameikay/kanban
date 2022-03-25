import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 2rem 1rem;
  overflow-x: auto;
  position: relative;

  .add-list {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    height: 3rem;
    background-color: #00000014;
    min-width: 272px;
    width: 272px;
    font-size: 14px;
    margin-left: 0.5rem;

    svg {
      margin-right: 8px;
    }
    :hover {
      background-color: #00000026;
    }
  }

  .creating-list {
    min-width: 272px;
    width: 272px;
    margin-left: 0.5rem;
    background-color: #ebecf0;
    height: fit-content;
    padding: 4px;
    border-radius: 4px;

    textarea {
      width: 100%;
      height: 2rem;
      font-size: 14px;
      padding: 6px 8px 2px;
      resize: none;
      border: 2px solid #fff;
      border-radius: 4px;
      outline: none;
      overflow-wrap: break-word;
      
      &:focus {
        color: #172b4d;
        border: 2px solid #0079bf;
      }
    }

    .editing-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-size: 14px;
        border: none;
        border-radius: 4px;
      }

      .add-list-btn {
        color: #fff;
        background-color: #0079bf;
        padding: 0.5rem 1rem;

        &:hover {
          background-color: ${darken(0.1, "#0079bf")};
        }
      }

      .close-creating {
        color: #5e6c84;

        &:hover {
          color: #172b4d;
        }
      }
    }
  }
`;
