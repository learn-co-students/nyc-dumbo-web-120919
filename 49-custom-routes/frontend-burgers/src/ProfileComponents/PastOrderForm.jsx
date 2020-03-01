import React, { Component } from 'react';

class PastOrderForm extends Component {

  state={
    price: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    return (
      <form id="past_order_form" onSubmit={this.handleSubmit}>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" autocomplete="off" value={this.state.price} onChange={this.handleChange}/>
        <input type="submit" value="Find Past Order" className="submit"/>
      </form>
    );
  }

}

export default PastOrderForm;
