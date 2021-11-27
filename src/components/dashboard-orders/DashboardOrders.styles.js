import styled from "styled-components";

export const ChipContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: white;
  border: 5px solid purple;
  border-radius: 6px;
  margin-bottom: 1rem;
  flex-direction: column;
  width: 10rem;
`;

export const ChipLabel = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  color: purple;
  justify-content: center;
`;

export const ChipCount = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.8rem;
  font-weight: 700;
  color: darkviolet;
  justify-content: center;
`;
