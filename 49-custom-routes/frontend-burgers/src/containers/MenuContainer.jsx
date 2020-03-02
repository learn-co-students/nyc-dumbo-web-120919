import React, { Component } from 'react';
import Burger from '../ProfileComponents/Burger'

class MenuContainer extends Component {

  render() {
    return (
      <div className="menu">
        <h2>Good Burger Menu</h2>
        <div id="burger-menu">
          {
            this.props.burgers.map(burgerObj => <Burger key={burgerObj.id} burger={burgerObj} addBurgerToOrder={this.props.addBurgerToOrder}/>)
          }
        </div>
      </div>

    );
  }

}

export default MenuContainer;
