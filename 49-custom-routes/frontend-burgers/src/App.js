import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <NavBar/>
          <Switch>
            <Route to="/login"/>
            <Route to="/login"/>
            <Route to="/login"/>
            <Route to="/login"/>

          </Switch>
      </div>
    )
  }

}

export default App;
