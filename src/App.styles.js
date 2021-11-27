import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
`;

export const AppBlock = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 ${(props) => (props.flex / 3) * 100}%;
  background-color: ${({ bkgColor = "teal" }) => bkgColor};
`;
