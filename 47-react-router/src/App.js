import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'


// import Character from './CharacterComponents/Character'
import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';



export default class App extends React.Component {

  state = {

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Header/>

            <aside className="sidebar">
              <ul>

              </ul>
            </aside>
        </header>

        <Home/>

        <Cat/>
        <Horton/>
        <Lorax/>
        <Thing1/>
        <Thing2/>

      </div>
    );
  }

}
