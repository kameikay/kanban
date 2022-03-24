import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: .5rem 2rem;
  background-color: hsl(4,44.3%,76.1%);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;

    > span {
      color: #E51761;
    }
  }

  .username {
    > span {
      font-weight: bold;
      color: #172b4d;
    }
  }
`;
