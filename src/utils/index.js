import { orderStatusLabelMapping } from "../App.constants";

export const findOrderById = (orders, id) => {
  return orders.findIndex((order) => order.id === id);
};

export const findAndUpdateOrderStatusById = (state, { id, status }) => {
  const orderIndex = findOrderById(state.orders, id);
  if (orderIndex < 0) return state;

  const updatedOrders = state.orders.slice();
  console.log({ updatedOrders, orderIndex });
  updatedOrders[orderIndex].status = status;
  return { ...state, orders: updatedOrders };
};

export const findAndDeleteOrderById = (state, id) => {
  const orderIndex = findOrderById(state.orders, id);
  if (orderIndex > -1) return state;

  const updatedOrders = state.orders.slice(orderIndex, 1);
  return { ...state, orders: updatedOrders };
};

export const generateId = (ordersList) => {
  const newId =
    ordersList.length > 0 ? ordersList[ordersList.length - 1].id + 1 : 1000;
  return newId;
};

export const getStatusCount = (orderList) => {
  const getAllStatus = Object.keys(orderStatusLabelMapping);
  const result = getAllStatus.reduce((acc, cur) => {
    const numOfOrders =
      orderList.filter((order) => order.status === cur).length ?? 0;
    return { ...acc, [cur]: numOfOrders };
  }, {});
  return result;
};
