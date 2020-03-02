import React from 'react';
import SingularBurger from '../ProfileComponents/SingularBurger'

const OrderContainer = (props) => {
  let {burgers} = props
  let totalSum = burgers.reduce((acc, burger) => {
    return acc + burger.price
  }, 0)

  return (
    <div className="order">
      <h2>Your Orders</h2>
      <ul id="order-list">
        {burgers.map((burger, index) => <SingularBurger key={index} burger={burger}/>)}
      </ul>

      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <button className="submit">Place an Order </button>
    </div>
  )
}

export default OrderContainer;
