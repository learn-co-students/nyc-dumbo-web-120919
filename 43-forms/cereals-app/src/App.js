import React from 'react';
import './App.css';
import CerealsContainer from './Components/CerealsContainer'
import Form from './Components/Form'

import data from './data'

class App extends React.Component{

  state = {
    cereals: data
  }

  addOneCereal = (infoComingFromChild) => {
    // infoComingFromChild -> {personName: "", cerealName: ""}
    console.log(infoComingFromChild);
  }

  render(){
    return (
      <div className="App">
        <h1>Cereals Application</h1>
        <Form addOneCereal={this.addOneCereal} />
        <CerealsContainer
          title="Cereals Container"
          cereals={this.state.cereals}
        />
      </div>
    );
  }
}
















export default App;
