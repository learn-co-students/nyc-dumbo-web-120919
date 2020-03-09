import React, { Component } from 'react';
import {connect} from 'react-redux'


class NewSandwichForm extends Component {

  state={
    sandwich_id: 0,
    rating: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `bearer ${this.props.token}`
      },
      body: JSON.stringify(this.state)
    })
    .then(r=> r.json())
    .then(newSandwich => {
      this.props.addOneSandwich(newSandwich)
    })


  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="sandwich">Sandwich</label>
        <select id="sandwich" name="sandwich_id" onChange={this.handleChange} value={this.state.sandwich_id}>
          {this.props.sandwiches.map(sandwich => {
            return <option key={sandwich.id } value={sandwich.id}> {sandwich.name} </option>
          })}
        </select>
        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" name="rating" autoComplete="off" value={this.state.rating} onChange={this.handleChange} />
        <input type="submit" value="Create Review"/>
      </form>
    );
  }

}


// the return value of mapStateToProps is an object that gets merged as props
const mapStateToProps = (state) => {
  // console.log(state.sandwichInfo.all);
  return {
    sandwiches: state.sandwichInfo.all,
    token: state.userInfo.token
  }
}

const addOneSandwich = (sandwich) => {
  return {
    type: "ADD_ONE_SANDWICH",
    payload: sandwich
  }
}


export default connect(mapStateToProps, {addOneSandwich})(NewSandwichForm);






















//
