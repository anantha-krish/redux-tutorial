import React, { useEffect, useState } from "react";
import SelectedOrderDetails from "../selected-order-details/SelectedOrderDetails.component";
import { useSelector, useDispatch } from "react-redux";
import { orderStatusLabelMapping, ORDER_CREATED } from "../../App.constants";
import { updateOrderStatus } from "../../redux/order/order.actions";
import { AppButton, AppSelect } from "../../App.styles";
const UpdateOrderStatus = () => {
  const selectedOrder = useSelector((state) => state.selectedOrder);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(ORDER_CREATED);
  const handleSelection = (e) => {
    setStatus(e.target.value);
  };
  const handleUpdateSubmit = () => {
    dispatch(updateOrderStatus(selectedOrder.id, status));
  };
  useEffect(() => {
    setStatus(selectedOrder.status ?? ORDER_CREATED);
  }, [selectedOrder]);
  return (
    <>
      <SelectedOrderDetails order={selectedOrder} />
      <AppSelect onChange={handleSelection} value={status}>
        {Object.entries(orderStatusLabelMapping).map(([key, label], index) => (
          <option key={index} value={key}>
            {label}
          </option>
        ))}
      </AppSelect>
      <AppButton onClick={handleUpdateSubmit}>Update Order</AppButton>
    </>
  );
};

export default UpdateOrderStatus;
