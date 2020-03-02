import React from 'react';
import OrderContainer from './OrderContainer'
import MenuContainer from './MenuContainer'
import PastOrdersContainer from './PastOrdersContainer'
import {withRouter} from 'react-router-dom'

class BurgerContainer extends React.Component {

  state={
    burgers: []
  }

  componentDidMount() {
    if (!this.props.token) {
      this.props.history.push("/login")
    }
  }

  addBurgerToOrder = (burgerObj) => {
    const newBurgers = [...this.state.burgers, burgerObj]
    this.setState({
      burgers: newBurgers
    })
  }

  render(){
    return(
      <div className="container">

        <div className="header">
          <h1 id="heading">Welcome to Good Burger, {this.props.user.username}</h1>
        </div>

        <OrderContainer burgers={this.state.burgers} />
        <MenuContainer burgers={this.props.burgers} addBurgerToOrder={this.addBurgerToOrder}/>
        <PastOrdersContainer orders={this.props.user.orders}/>
      </div>
    )
  }

}

export default withRouter(BurgerContainer);
