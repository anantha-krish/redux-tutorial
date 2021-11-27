import React, { useState } from "react";
import SelectedOrderDetails from "../selected-order-details/SelectedOrderDetails.component";
import { useSelector, useDispatch } from "react-redux";
import { orderStatusLabelMapping, ORDER_CREATED } from "../../App.constants";
import { updateOrderStatus } from "../../redux/order/order.actions";
const UpdateOrderStatus = () => {
  const selectedOrder = useSelector((state) => state.selectedOrder);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(ORDER_CREATED);
  const handleSelection = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <SelectedOrderDetails order={selectedOrder} />
      <select onChange={handleSelection} value={status}>
        {Object.entries(orderStatusLabelMapping).map(([key, label], index) => (
          <option key={index} value={key}>
            {label}
          </option>
        ))}
      </select>
      <input
        type="button"
        value="update"
        onClick={() => dispatch(updateOrderStatus(selectedOrder.id, status))}
      />
    </>
  );
};

export default UpdateOrderStatus;
