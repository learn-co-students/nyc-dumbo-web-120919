import React from 'react';
import PastOrderForm from '../ProfileComponents/PastOrderForm'

const PastOrdersContainer = () => {

  return (
    <div className="custom">
      <h2>See Past Orders</h2>
      <PastOrderForm/>

      <div id="ordersDiv">

      </div>
    </div>
  )
}

export default PastOrdersContainer;
