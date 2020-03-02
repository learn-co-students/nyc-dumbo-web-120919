import React from 'react';

const Order = (props) =>{
  return (
    <div className="card">
      <h4>{props.order.timeStamp}</h4>
      <p>{props.price}</p>
      <button className="deleteButton">x</button>
    </div>
  )
}

export default Order;
