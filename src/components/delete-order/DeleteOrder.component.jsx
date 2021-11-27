import React from "react";
import SelectedOrderDetails from "../selected-order-details/SelectedOrderDetails.component";
const DeleteOrder = () => {
  return (
    <>
      <SelectedOrderDetails />
      <input type="button" value="delete" />
    </>
  );
};

export default DeleteOrder;
