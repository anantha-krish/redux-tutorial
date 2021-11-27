import styled, { css } from "styled-components";

export const OrdersTable = styled.table`
  border-collapse: collapse;
  font-size: 2rem;
  cursor: pointer;
  background-color: white;
`;

const cellstyles = css`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  ${cellstyles}
`;

export const TableData = styled.td`
  ${cellstyles}
`;
const TableRowSelected = css`
  color: white;
  &:nth-child(even),
  &:nth-child(odd) {
    background-color: purple;
  }

  border: 2px solid black;
  &:hover {
    background-color: purple;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
  ${(props) => {
    return props.selected && TableRowSelected;
  }}
`;
