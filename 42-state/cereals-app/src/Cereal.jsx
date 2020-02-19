import React, { Component } from 'react';

class Cereal extends Component {
  // State is a bunch of data consistent across all instances that can be changed


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  //   this.handleLike = this.handleLike.bind(this)
  // }


  state = {
    likes: 0,
    dairyFree: false
  }

  // Your event listeners should be an arrow function
  handleLike = (e) => {
    // e.persist() is useful when you're trying to access e.something in a .then()


    // setState merges the POJO that it receives into the old state (first arg)
      // setState takes in a callback as a second argument that is to be executed when state change actually occurs (second arg)

    let newNumber = this.state.likes + 1
    this.setState({
      likes: newNumber,
    })

    // functional setState is useful when your new state is dependent on the old state
    // this.setState( (prevState) => {
    //   return {
    //     likes: prevState.likes + 1
    //   }
    // )




    // console.log(this.state.likes, this.props);
  }

  render(){
    // console.log(this.state, this.props);
    return(
      <div className="container">
        <img src="https://www.portablepress.com/wp-content/uploads/2014/04/CerealAndMilk_DS.jpg" alt="cereal and milk"></img>
        <p><span>{ this.props.personName }</span> likes { this.props.cerealName }</p>
        <button onClick={ this.handleLike }>{this.state.likes} Likes</button>
      </div>

    )
  }

}

Cereal.defaultProps = {
  cerealName: "CEREAL_NAME",
  personName: "PERSON_NAME"
}

export default Cereal;
