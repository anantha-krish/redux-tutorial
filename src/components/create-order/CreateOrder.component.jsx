import React, { Component } from "react";

export class CreateOrder extends Component {
  render() {
    return (
      <>
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Quantity" />

        <input type="text" placeholder="Company Name" />
        <input type="button" value="Submit Order" />
      </>
    );
  }
}

export default CreateOrder;
