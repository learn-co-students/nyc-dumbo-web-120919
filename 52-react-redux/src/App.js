import React from 'react';
import './App.css';
import BritContainer from './Components/BritContainer'
import NewBritForm from './Components/NewBritForm'

function App(props) {

  console.log(props);

  
  return (
    <div className="App">
      <h1>The British Are Coming</h1>
      <NewBritForm/>
      <BritContainer/>
    </div>
  );
}

export default App;
