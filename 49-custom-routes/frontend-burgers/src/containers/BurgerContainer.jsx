import React from 'react';
import OrderContainer from './OrderContainer'
import MenuContainer from './MenuContainer'
import PastOrdersContainer from './PastOrdersContainer'

class BurgerContainer extends React.Component {

  state={
    orders: []
  }

  addBurgerToOrder = (burgerObj) => {
    const newBurgers = [...this.state.orders, burgerObj]
    this.setState({
      orders: newBurgers
    })
  }

  render(){
    return(
      <div className="container">
        
        <div className="header">
          <h1 id="heading">Welcome to Good Burger, {this.props.user.username}</h1>
        </div>

        <OrderContainer orders={this.state.orders}/>
        <MenuContainer burgers={this.props.burgers} addBurgerToOrder={this.addBurgerToOrder}/>
        <PastOrdersContainer/>
      </div>
    )
  }

}

export default BurgerContainer;
