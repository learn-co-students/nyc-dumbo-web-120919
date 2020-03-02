import React from 'react';
import SingularBurger from './SingularBurger'


class Order extends React.Component{

  state={
    clicked: false
  }

  handleClick = (e) => {
    console.log(this.props);
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div className="card" >
        <h4 onClick={this.handleClick}>{this.props.order.nice_timestamp_for_grandma}</h4>
        <p>{this.props.price}</p>

        {
          this.state.clicked
            ?
          <ul className="burgersList">
            {this.props.order.burger_orders.map(b_order => {
              return <SingularBurger key={b_order.id} burger={b_order.burger} burgerOrderId={b_order.id}/>
            })}
          </ul>
            :
          null
        }

        <button className="deleteButton">x</button>
      </div>
    )
  }
}


export default Order;
