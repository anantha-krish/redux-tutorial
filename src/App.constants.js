export const ORDER_CREATED = "ORDER_CREATED";
export const ORDER_SHIPPED = "ORDER_SHIPPED";
export const ORDER_DELIVERED = "ORDER_DELIVERED";
export const ORDER_ON_THE_WAY = "ORDER_ON_THE_WAY";

export const orderStatusLabelMapping = {
  [ORDER_CREATED]: "Created",
  [ORDER_SHIPPED]: "Dispatched",
  [ORDER_DELIVERED]: "Delivered",
  [ORDER_ON_THE_WAY]: "Out for delivery",
};
