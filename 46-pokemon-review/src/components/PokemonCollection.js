import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {



  render() {
    let arrayOfComponents = this.props.pokemons.map(poke => {
      return <PokemonCard key={`${poke.name}-${poke.id}`} pokemon={poke} />
    })



    return (
      <Card.Group itemsPerRow={6}>
        { arrayOfComponents }

      </Card.Group>
    )
  }
}

export default PokemonCollection
