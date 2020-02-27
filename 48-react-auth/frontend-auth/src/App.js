import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

class App extends React.Component {

  state = {
    user: {
      snacks: [],
      username: "",
      id: 0
    },
    token: ""
  }

  componentDidMount() {
  }

  addOneSnack = (snackObj) => {
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    console.log(userInfo);

  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    console.log(userInfo);
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer user={this.state.user} addOneSnack={this.addOneSnack} />
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default App
















//
