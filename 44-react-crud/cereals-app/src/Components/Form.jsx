import React, { Component } from 'react';

class Form extends Component {

  state = {
    personName: "Harry Potter",
    cerealName: "Oatmeal"
  }

  handleAllInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneCereal(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="personName">Name:</label>
        <input
          id="personName"
          type="text"
          name="personName"
          autoComplete="off"
          value={this.state.personName}
          onChange={ this.handleAllInputs }
        />
      <label htmlFor="cerealName">likes:</label>
        <input
          id="cerealName"
          type="text"
          name="cerealName"
          autoComplete="off"
          value={this.state.cerealName}
          onChange={ this.handleAllInputs }
        />
        <input type="submit" value="Send"/>
      </form>
    );
  }

}

export default Form;
