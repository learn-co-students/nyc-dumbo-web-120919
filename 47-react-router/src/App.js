import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'


import Character from './CharacterComponents/Character'
import { Cat as Kitty, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';


import {Route, Switch, Link} from 'react-router-dom'


export default class App extends React.Component {

  state = {
    characters: [
      {id: 1, name: "Lorax", gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif", urlThing: "lorax"},
      {id: 2, name: "The Cat in the Chat", gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif", urlThing: "cat"},
      {id: 3, name: "Horton", gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif", urlThing: "horton"}

    ]
  }



  chooseWhichComponentToRender = (routerProps) => {
    console.log(routerProps);
    let foundCharacter = this.state.characters.find(character => {
      return character.urlThing === routerProps.match.params.urlThing
    })


    if(foundCharacter){

      return <Character name={foundCharacter.name} gif={foundCharacter.gif}/>
    } else {
      return <NotFound/>
    }

  }






  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Header/>

            <aside className="sidebar">
              <ul>
                <Link to="/">Home</Link>
                {
                  this.state.characters.map(character => {
                    return <Link to={`/characters/${character.urlThing}`} key={character.id}>{character.name}</Link>
                  })
                }
              </ul>
            </aside>
        </header>


        <Switch>
          <Route path="/" exact component={Home} />
          {/* NOT NECESSARY */}
          <Route path="/cat" exact strict component={Kitty} />
          <Route path="/horton" render={ () => <Horton dog="doggy"/>  } />


          <Route path="/lorax" >
            <Lorax lor="lor"/>
          </Route>

          <Route path="/thing1">
            <Thing1/>
          </Route>
          <Route path="/thing2" component={Thing2} />
          {/* NOT NECESSARY */}

          <Route path="/characters/:urlThing" render={ this.chooseWhichComponentToRender } />

          <Route component={NotFound} />

        </Switch>



      </div>
    );
  }

















}
