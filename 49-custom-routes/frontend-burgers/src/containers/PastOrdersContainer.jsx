import React from 'react';
import PastOrderForm from '../ProfileComponents/PastOrderForm'
import Order from '../ProfileComponents/Order'

const PastOrdersContainer = (props) => {

  return (
    <div className="custom">
      <h2>See Past Orders</h2>

      <div id="ordersDiv">
        {props.orders.map(order => <Order key={order.id} order={order}/>)}
      </div>

      <PastOrderForm/>
    </div>
  )
}

export default PastOrdersContainer;
