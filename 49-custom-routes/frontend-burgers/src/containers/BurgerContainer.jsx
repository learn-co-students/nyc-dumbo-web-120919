import React from 'react';
import OrderContainer from './OrderContainer'
import MenuContainer from './MenuContainer'
import PastOrdersContainer from './PastOrdersContainer'

const BurgerContainer = () => {
  return(
    <div className="container">
      <div className="header">
        <h1 id="heading">Welcome to Good Burger</h1>
      </div>
      <OrderContainer/>
      <MenuContainer/>
      <PastOrdersContainer/>
    </div>
  )
}

export default BurgerContainer;
