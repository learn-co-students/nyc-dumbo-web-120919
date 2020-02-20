import React from 'react';
import './App.css';
import CerealsContainer from './Components/CerealsContainer'
import Form from './Components/Form'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <h1>Cereals Application</h1>
        <Form/>
        <CerealsContainer title="Cereals Container"/>
      </div>
    );
  }
}

export default App;
