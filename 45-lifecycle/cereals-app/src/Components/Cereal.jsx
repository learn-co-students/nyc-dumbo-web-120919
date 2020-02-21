import React, { Component } from 'react';

class Cereal extends Component {

  handleLike = (e) => {
    this.props.updateOneCereal(this.props.cereal.id, 2)
  }

  handleDelete = (e) => {
    this.props.deleteOneCereal(this.props.cereal.id)
  }

  render(){
    let {cerealName, personName, likes} = this.props.cereal
    return(
      <div className="container">
        <button className="delButton" onClick={ this.handleDelete }>X</button>
        <img src="https://www.portablepress.com/wp-content/uploads/2014/04/CerealAndMilk_DS.jpg" alt="cereal and milk"></img>
        <p><span>{ personName }</span> likes { cerealName }</p>
        <button onClick={ this.handleLike }>{ likes === 0 ? "No" : likes } Likes</button>
      </div>

    )
  }

}
















Cereal.defaultProps = {
  cerealName: "CEREAL_NAME",
  personName: "PERSON_NAME"
}

export default Cereal;
