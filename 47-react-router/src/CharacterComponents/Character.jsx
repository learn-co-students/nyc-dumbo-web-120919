import React from 'react';

export default class extends React.Component {

  componentDidMount() {
    console.log("gsji");
  }

  render() {
    let {name, gif} = this.props

    return (
       <article>
        <h2>{name}</h2>
        <img src={gif } alt={ name } />
       </article>
    );
  }


}
