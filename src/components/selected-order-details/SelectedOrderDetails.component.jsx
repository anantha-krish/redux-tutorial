import React from "react";

const SelectedOrderDetails = ({ order = {} }) => {
  console.log(order);
  const isEmpty = Object.keys(order).length === 0;
  return (
    <div>
      {!isEmpty && (
        <>
          Order ID: {order.id} status: {order.status}
        </>
      )}
      {isEmpty && <>NO orders selected</>}
    </div>
  );
};

export default SelectedOrderDetails;
