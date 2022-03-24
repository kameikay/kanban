import styled, { css } from "styled-components";

interface IContainer {
  isDragging: boolean;
}

export const Container = styled.div<IContainer>`
  position: relative;
  width: 100%;
  min-height: 20px;
  margin-bottom: 0.5rem;
  padding: 6px 8px 2px;
  z-index: 10;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 0 #091e4240;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  a {
    word-wrap: break-word;
    clear: both;
    color: #172b4d;
    display: block;
    margin: 0 0 4px;
    overflow: hidden;
  }

  ${({ isDragging }) =>
    isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      background: transparent;
      cursor: grabbing;
      box-shadow: none;
      
      a {
        color: #6b778c;
      }
    `}
`;
