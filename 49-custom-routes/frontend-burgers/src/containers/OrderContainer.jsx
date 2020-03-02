import React from 'react';

const OrderContainer = ({orders}) => {
  
  let totalSum = orders.reduce((acc, order) => {
    return acc + order.price
  }, 0)

  return (
    <div className="order">
      <h2>Your Orders</h2>
      <ul id="order-list">
        {orders.map((order, index) => <li key={index}>{order.name}</li>)}
      </ul>

      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <button className="submit">Place an Order </button>
    </div>
  )
}

export default OrderContainer;
