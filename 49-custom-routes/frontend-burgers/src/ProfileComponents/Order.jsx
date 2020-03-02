import React from 'react';
import SingularBurger from './SingularBurger'


class Order extends React.Component{

  state={
    clicked: false
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    return (
      <div className="card" onClick={this.handleClick}>
        <h4>{this.props.order.created_at}</h4>
        <p>{this.props.price}</p>

        {
          this.state.clicked
            ?
          <ul className="burgersList">
            {}
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
