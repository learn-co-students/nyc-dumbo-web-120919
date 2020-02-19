import React from 'react';
import './App.css';
import CerealsContainer from './CerealsContainer'

class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <h1>Cereals Application</h1>
        <CerealsContainer title="Cereals Container"/>
      </div>
    );
  }
}













export default App;
