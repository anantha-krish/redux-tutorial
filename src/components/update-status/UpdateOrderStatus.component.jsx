import React from "react";
import SelectedOrderDetails from "../selected-order-details/SelectedOrderDetails.component";

const UpdateOrderStatus = () => {
  return (
    <>
      <SelectedOrderDetails />
      <select>
        <option value="CREATED">Created</option>
        <option value="SHIPPED">Shipped</option>
        <option value="ON_THE_WAY">Out for Delivery</option>
        <option value="DELIVERED">Delivered</option>
      </select>
      <input type="button" value="update" />
    </>
  );
};

export default UpdateOrderStatus;
