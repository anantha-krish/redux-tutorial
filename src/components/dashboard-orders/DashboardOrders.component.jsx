import React from "react";
import { ChipContainer, ChipLabel, ChipCount } from "./DashboardOrders.styles";

const ChipMapping = [
  { label: "Created", id: "created" },
  {
    label: "Canceled",
    id: "canceled",
  },
];
const DashboardOrders = () => {
  return ChipMapping.map(({ label, id }) => (
    <ChipContainer>
      <ChipLabel>{label}</ChipLabel>
      <ChipCount>1</ChipCount>
    </ChipContainer>
  ));
};

export default DashboardOrders;
