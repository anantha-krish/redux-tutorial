import styled from "styled-components";

export const ChipContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: white;
  border: 5px solid purple;
  border-radius: 6px;
  margin: 0.5rem;
  width: max-content;
  flex: 1 0 45%;
  flex-direction: column;
  justify-content: space-between;
`;
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
