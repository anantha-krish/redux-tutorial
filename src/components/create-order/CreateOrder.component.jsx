import React, { Component } from "react";
import { createOrder } from "../../redux/order/order.actions";
import { connect } from "react-redux";

const createOrderInitialState = {
  productName: "",
  quantity: 0,
  companyName: "",
};

export class CreateOrder extends Component {
  state = createOrderInitialState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    this.props.createOrder(this.state);
    this.setState(createOrderInitialState);
  };

  render() {
    return (
      <>
        <input
          name="productName"
          value={this.state.productName}
          type="text"
          onChange={this.handleChange}
          placeholder="Product Name"
        />
        <input
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
          type="number"
          placeholder="Quantity"
        />

        <input
          name="companyName"
          value={this.state.companyName}
          onChange={this.handleChange}
          type="text"
          placeholder="Company Name"
        />
        <input type="button" value="Submit Order" onClick={this.handleSubmit} />
      </>
    );
  }
}

const mapDispatchToProps = {
  createOrder,
};

export default connect(null, mapDispatchToProps)(CreateOrder);
