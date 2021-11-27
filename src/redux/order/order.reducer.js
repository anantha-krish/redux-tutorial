import { ORDER_CREATED } from "../../App.constants";
import {
  findAndDeleteOrderById,
  findAndUpdateOrderStatusById,
  generateId,
} from "../../utils";
import { orderActionTypes } from "./order.constants";

const initalState = {
  orders: [],
  selectedOrder: {},
};

export const orderReducer = (state = initalState, action) => {
  switch (action.type) {
    case orderActionTypes.CREATE_ORDER: {
      const ordersList = state.orders;
      const id = generateId(ordersList);
      const newOrder = { ...action.payload, id, status: ORDER_CREATED };
      return {
        ...state,
        orders: [...state.orders, newOrder],
      };
    }
    case orderActionTypes.UPDATE_STATUS:
      return findAndUpdateOrderStatusById(state, action.payload);
    case orderActionTypes.DELETE_ORDER:
      return findAndDeleteOrderById(state, action.payload);
    case orderActionTypes.SELECT_ORDER:
      return {
        ...state,
        selectedOrder: action.payload,
      };
    default:
      return state;
  }
};
