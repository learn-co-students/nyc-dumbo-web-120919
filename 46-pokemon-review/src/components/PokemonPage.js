import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: "Chickn"
  }

  componentDidMount() {

    fetch("http://localhost:4000/pokemon")
      .then(r => r.json())
      .then((resp) => {
        this.setState({
          pokemons: resp
        })
      })

  }


  theFunctionThatReturnsAFilteredArray = () => {
    let theFilteredVersionOfTheArray = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })
    return theFilteredVersionOfTheArray
  }

  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }



  addOnePokemon = (pokemonObj) => {
    let theProperlyFormattedPokemon = {
      name: pokemonObj.name,
      sprites: {
        front: pokemonObj.frontUrl,
        back: pokemonObj.backUrl
      },
      stats: [{name: "hp", value: pokemonObj.hp}]
    }


    fetch("http://localhost:4000/pokemon", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(theProperlyFormattedPokemon)
    })
      .then(r => r.json())
      .then(newPokemon => {
        let newArray = [...this.state.pokemons, newPokemon]
        this.setState({
          pokemons: newArray
        })
      })



  }


  render() {

    let theFilteredVersionOfTheArray = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <br />

        <PokemonCollection
          pokemons={this.theFunctionThatReturnsAFilteredArray()}
        />














      </Container>
    )
  }
}

export default PokemonPage
