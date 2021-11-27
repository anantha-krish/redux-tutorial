import React from "react";
import {
  ChipContainer,
  ChipLabel,
  ChipCount,
  DashboardContainer,
} from "./DashboardOrders.styles";
import { useSelector } from "react-redux";
import { getStatusCount } from "../../utils";
import { orderStatusLabelMapping } from "../../App.constants";

const DashboardOrders = () => {
  const orders = useSelector((state) => state.orders);
  const summary = Object.entries(getStatusCount(orders));
  return (
    <DashboardContainer>
      {summary?.map(([orderStatus, count], index) => (
        <ChipContainer key={`chip-${index + 1}`}>
          <ChipLabel>{orderStatusLabelMapping[orderStatus]}</ChipLabel>
          <ChipCount>{count}</ChipCount>
        </ChipContainer>
      ))}
    </DashboardContainer>
  );
};

export default DashboardOrders;
