import React from 'react';
import PastOrderForm from '../ProfileComponents/PastOrderForm'
import Order from '../ProfileComponents/Order'

const PastOrdersContainer = () => {

  return (
    <div className="custom">
      <h2>See Past Orders</h2>

      <div id="ordersDiv">
        {}
      </div>

      <PastOrderForm/>
    </div>
  )
}

export default PastOrdersContainer;
