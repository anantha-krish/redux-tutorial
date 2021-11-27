import React from "react";
import {
  OrdersTable,
  TableData,
  TableHeader,
  TableRow,
} from "./ViewOrders.styles";

const ViewOrders = () => {
  let orders = {
    id: "12",
    productName: "test",
    quantity: 2,
    status: "Created",
    company: "ABC Pvt. Ltd.",
  };
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
        <TableRow
          key={orders.id}
          onClick={() => console.log(orders.id)}
          selected={true}
        >
          <TableData>{orders.id}</TableData>
          <TableData>{orders.productName}</TableData>
          <TableData>{orders.quantity}</TableData>
          <TableData>{orders.status}</TableData>
          <TableData>{orders.company}</TableData>
        </TableRow>
        <TableRow key={orders.id} onClick={() => console.log(orders.id)}>
          <TableData>{orders.id}</TableData>
          <TableData>{orders.productName}</TableData>
          <TableData>{orders.quantity}</TableData>
          <TableData>{orders.status}</TableData>
          <TableData>{orders.company}</TableData>
        </TableRow>
      </tbody>
    </OrdersTable>
  );
};

export default ViewOrders;
