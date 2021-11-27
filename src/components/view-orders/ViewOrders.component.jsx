import React from "react";
import {
  OrdersTable,
  TableData,
  TableHeader,
  TableRow,
} from "./ViewOrders.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "../../redux/order/order.actions";
import { orderStatusLabelMapping } from "../../App.constants";

const ViewOrders = () => {
  const orders = useSelector((state) => state.orders);
  const selectedOrder = useSelector((state) => state.selectedOrder);
  const dispatch = useDispatch();
  return (
    <OrdersTable>
      <thead>
        <TableRow>
          <TableHeader scope="col">Order Id</TableHeader>
          <TableHeader scope="col">Product Name</TableHeader>
          <TableHeader scope="col">Quantity</TableHeader>
          <TableHeader scope="col">Status</TableHeader>
          <TableHeader scope="col">Company</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {orders?.map((order) => (
          <TableRow
            key={order.id}
            onClick={() => dispatch(selectOrder(order))}
            selected={order.id === selectedOrder.id}
          >
            <TableData>{order.id}</TableData>
            <TableData>{order.productName}</TableData>
            <TableData>{order.quantity}</TableData>
            <TableData>{orderStatusLabelMapping[order.status]}</TableData>
            <TableData>{order.companyName}</TableData>
          </TableRow>
        ))}
      </tbody>
    </OrdersTable>
  );
};

export default ViewOrders;
