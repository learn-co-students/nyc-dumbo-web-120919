import React from 'react';
import './App.css';
import CerealsContainer from './Components/CerealsContainer'
import Form from './Components/Form'

import data from './data'

class App extends React.Component{

  state = {
    cereals: data
  }

  deleteOneCereal = (idFromChild) => {
    let filteredArray = this.state.cereals.filter(cereal => cereal.id !== idFromChild)

    this.setState({
      cereals: filteredArray
    })
  }

  updateOneCereal = (idFromChild, numberFromChild) => {

    let updatedArray = this.state.cereals.map(oneElementInsideTheArray => {
      if (oneElementInsideTheArray.id === idFromChild) {

        return {...oneElementInsideTheArray, likes: oneElementInsideTheArray.likes + numberFromChild}

      } else {
        return oneElementInsideTheArray
      }
    })

    this.setState({
      cereals: updatedArray
    })




  }


  addOneCereal = (infoComingFromChild) => {
    // infoComingFromChild -> {personName: "", cerealName: ""}
    // infoComingFromChild.id = Math.floor(Math.random() * 1000)
    let newCerealWithId = {
      ...infoComingFromChild,
      id: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 25)
    }

    this.setState({
      cereals: [ newCerealWithId, ...this.state.cereals]
    })

  }

  render(){
    return (
      <div className="App">
        <h1>Cereals Application</h1>
        <Form addOneCereal={this.addOneCereal} />
        <CerealsContainer
          title="Cereals Container"
          cereals={this.state.cereals}
          deleteOneCereal={this.deleteOneCereal}
          updateOneCereal={this.updateOneCereal}

        />
      </div>
    );
  }
}
















export default App;
