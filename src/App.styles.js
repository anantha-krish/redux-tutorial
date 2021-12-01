import styled, { css } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const AppBlock = styled.div`
  display: flex;
  height: 50%;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  flex: 1 1 ${({ flex = 1 }) => (flex / 3) * 100}%;
  background-color: ${({ bkgColor = "teal" }) => bkgColor};
`;
export const AppButton = styled.button`
  background: transparent;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  margin-top: 10px;
  border: 2px solid white;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: white;
    color: black;
    border: 2px solid black;
  }
`;

export const AppSubHeading = styled.div`
  margin: 10px 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: not-allowed;
  background: white;
  color: black;
  border: 2px solid black;
`;

const inputStyleCSS = css`
  padding: 5px 10px;
  font-size: 16px;
  width: 20rem;
  margin-bottom: 10px;
  border-radius: 10px;
  border: transparent;
`;
export const AppSelect = styled.select`
  ${inputStyleCSS}
`;
export const AppInput = styled.input`
  ${inputStyleCSS}
`;
