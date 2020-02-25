import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }


  handleClick = (e) => {
    // console.log("helloo");
    this.setState({
      flipped: !this.state.flipped
    })
  }










  render() {
    let pokemon = this.props.pokemon
    // let {pokemon} = this.props

    // let {key1, key2} = obj
    // obj = {key1: value1, key2:value2}
    // key1 -> value1
    // key2 -> value2

    // console.log(pokemon);


    // let name = pokemon.name
    let { name, sprites, stats} = pokemon
    // let { name, sprites:{front,back}} = pokemon
    let foundHPObject = stats.find(statObj => {return statObj.name === "hp"})
    let {front, back} = sprites


    return (
      <Card onClick={this.handleClick}>
        { this.state.flipped ? <p>Back</p> : <p>Front</p> }
        <div>
          <div className="image">
            <img alt="oh no!" src={ this.state.flipped ? back : front } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {foundHPObject.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
