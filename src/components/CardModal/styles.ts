import { darken } from "polished";
import styled from "styled-components";

export const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Container = styled.div`
  background-color: #f4f5f7;
  padding: 1rem;
  color: #172b4d;
  position: relative;
  width: 768px;
  z-index: 25;
  border-radius: 4px;

  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    padding: 0.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    &:hover {
      background-color: #00000014;
    }
  }

  header {
    display: flex;
    align-items: flex-start;

    .icon {
      margin-right: 1rem;
      padding: 4px 0;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .title {
      width: 90%;

      input {
        font-size: 20px;
        line-height: 1.5rem;
        font-weight: 600;
        border: none;
        padding: 4px;
        border-radius: 4px;
        width: 100%;
        margin-bottom: 4px;
        background-color: transparent;

        :focus {
          background-color: #fff;
          outline-color: #0079bf;
        }
      }

      h3 {
        font-weight: 600;
        font-size: 1rem;
        padding: 0 4px;
      }

      p {
        color: #5e6c84;
        font-size: 14px;
        padding: 0 4px;

        > span {
          text-decoration: underline;
        }
      }
    }
  }

  main {
    margin-top: 2rem;

    textarea {
      overflow: hidden;
      overflow-wrap: break-word;
      resize: none;
      height: 108px;
      background: #091e420a;
      box-shadow: none;
      min-height: 108px;
      border: none;
      border-radius: 4px;
      width: 100%;
      margin-top: 1rem;
      padding: 0.5rem;
      transition: all 0.3s ease-in;
      outline-color: #0079bf;

      &::placeholder {
        color: #5e6c84;
      }

      &:focus {
        background-color: #fff;
        box-shadow: inset 0 0 0 1px #091e4221;
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1.5rem;

    .modal-btn {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: none;
      color: #fff;
      font-weight: 600;
      transition: all 0.3s ease-in;
    }

    .save {
      margin-right: 1rem;
      background-color: #0079bf;

      &:hover {
        background-color: ${darken(0.1, "#0079bf")};
      }
    }

    .delete {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f44336;

      svg {
        margin-right: 4px;
      }
      &:hover {
        background-color: ${darken(0.2, "#F44336")};
      }
    }
  }
`;
