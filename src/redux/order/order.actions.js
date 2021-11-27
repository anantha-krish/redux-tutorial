import { orderActionTypes } from "./order.constants";

export const createOrder = (orderDetails) => {
  return {
    type: orderActionTypes.CREATE_ORDER,
    payload: orderDetails,
  };
};

export const selectOrder = (orderDetails) => {
  return {
    type: orderActionTypes.SELECT_ORDER,
    payload: orderDetails,
  };
};

export const updateOrderStatus = (id, status) => ({
  type: orderActionTypes.UPDATE_STATUS,
  payload: { id, status },
});

export const deleteOrder = (id) => ({
  type: orderActionTypes.DELETE_ORDER,
  payload: id,
});
