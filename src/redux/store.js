import { createStore } from "redux";
import { orderReducer } from "./order/order.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(orderReducer, composeWithDevTools());
export default store;
