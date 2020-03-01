import React from 'react';
import Order from '../ProfileComponents/Order'

const OrderContainer = () => {
  return (
    <div className="order">
      <h2>Your Orders</h2>
      <ul id="order-list">

      </ul>

      <h3>Total Price: $<span id="total">0</span></h3>
      <button className="submit">Place an Order </button>
    </div>
  )
}

export default OrderContainer;
