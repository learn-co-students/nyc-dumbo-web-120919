import React, { Component } from 'react';

class Cereal extends Component {

  render() {
    return(
      <div className="container">
        <img src="https://www.portablepress.com/wp-content/uploads/2014/04/CerealAndMilk_DS.jpg" alt="cereal and milk"></img>
        <p><span>{ this.props.personName }</span> likes { this.props.cerealName }</p>
      </div>

    )
  }

}

Cereal.defaultProps = {
  cerealName: "CEREAL_NAME",
  personName: "PERSON_NAME"
}

export default Cereal;
