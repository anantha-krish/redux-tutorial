import React from "react";
import { AppButton } from "../../App.styles";
import SelectedOrderDetails from "../selected-order-details/SelectedOrderDetails.component";
const DeleteOrder = () => {
  return (
    <>
      <SelectedOrderDetails />
      <AppButton>Delete Order</AppButton>
    </>
  );
};

export default DeleteOrder;
