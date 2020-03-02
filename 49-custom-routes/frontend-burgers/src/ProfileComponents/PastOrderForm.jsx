import React, { Component } from 'react';

class PastOrderForm extends Component {

  state={
    username: "",
    count: -1
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
      <div>
        <form id="past_order_form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" autoComplete="off" value={this.state.username} onChange={this.handleChange}/>
          <input type="submit" value="Find Past Order" className="submit"/>
        </form>
        <p>{this.state.count === -1 ? null : `${this.state.count} Orders` }</p>
      </div>
    );
  }

}

export default PastOrderForm;
