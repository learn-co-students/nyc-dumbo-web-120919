import React, { Component } from 'react';

class Cereal extends Component {

  state = {
    likes: 0,
    dairyFree: false
  }

  handleLike = (e) => {
    let newNumber = this.state.likes + 1
    this.setState({
      likes: newNumber,
    })
  }

  render(){
    // console.log(this.props);
    let {cerealName, personName} = this.props.cereal
    return(
      <div className="container">
        <img src="https://www.portablepress.com/wp-content/uploads/2014/04/CerealAndMilk_DS.jpg" alt="cereal and milk"></img>
        <p><span>{ personName }</span> likes { cerealName }</p>
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
