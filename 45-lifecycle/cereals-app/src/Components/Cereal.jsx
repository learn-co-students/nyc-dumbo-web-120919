import React, { Component } from 'react';

class Cereal extends Component {

  state = {
    className: "liked"
  }

  handleLike = (e) => {
    let number = Math.random() < 0.5 ? 2 : -100
    this.props.updateOneCereal(this.props.cereal.id, number)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(this.state);
    // console.log(this.props);

    if (this.props.cereal.likes > prevProps.cereal.likes) {
      this.setState({
        className: "liked"
      })
    }

    if (this.props.cereal.likes < prevProps.cereal.likes) {
      this.setState({
        className: "disliked"
      })
    }

  }

  handleDelete = (e) => {
    this.props.deleteOneCereal(this.props.cereal.id)
  }


  componentWillUnmount() {
    console.log("Goodbye for", this.props.cereal.personName);
  }

  render(){
    let {cerealName, personName, likes} = this.props.cereal
    return(
      <div className={`container ${this.state.className}`}>
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
