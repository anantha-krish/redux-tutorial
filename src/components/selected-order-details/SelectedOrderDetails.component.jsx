import React from "react";
import { orderStatusLabelMapping } from "../../App.constants";
import { AppSubHeading } from "../../App.styles";

const SelectedOrderDetails = ({ order = {} }) => {
  console.log(order);
  const isEmpty = Object.keys(order).length === 0;
  return (
    <AppSubHeading>
      {!isEmpty && (
        <>
          Order ID: {order.id} status: {orderStatusLabelMapping[order.status]}
        </>
      )}
      {isEmpty && <>NO orders selected</>}
    </AppSubHeading>
  );
};

export default SelectedOrderDetails;
