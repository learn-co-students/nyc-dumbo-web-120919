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

    fetch("http://localhost:4000/users/history", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        thisIsTheUserName: this.state.username
      })
    })
      .then(r => r.json())
      .then(resp => {
        this.setState({
          count: resp.count
        })
      })



  }

  renderText = () => {
    if (this.state.count === -1) {
      return ""
    } else if (this.state.count === -2) {
      return "No user found."
    } else {
      return `Has ${this.state.count} number of orders!`
    }
  }

  render() {
    return (
      <div>
        <form id="past_order_form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" autoComplete="off" value={this.state.username} onChange={this.handleChange}/>
          <input type="submit" value="Find Past Order" className="submit"/>
        </form>
        <p>{this.renderText()}</p>
      </div>
    );
  }

}

export default PastOrderForm;
