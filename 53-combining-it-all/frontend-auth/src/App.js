import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchAndSetSandwiches()
    // fetch("http://localhost:4000/sandwiches")
    //   .then(r => r.json())
    //   .then((sandwichesArr) => {
    //     this.props.setSandwiches(sandwichesArr)
    //   })
    if (localStorage.token) {
      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then((resp) => {
          if (resp.token) {
            localStorage.token = resp.token
            this.props.setUser(resp)
          }
        })
    }

  }

  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then((resp) => {
      if (resp.token) {
        localStorage.token = resp.token
        this.props.setUser(resp)
      }
    })

  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Submitted Register");
    fetch(`http://localhost:4000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then((resp) => {
        if (resp.token) {
          localStorage.token = resp.token
          this.props.setUser(resp)
        }
      })
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer />
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={ Home } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

// thunk allows us to return a function inside of an action creator
  // you do the fetch inside the returned function's body
  // you have access to dispatch in the first argument of the returned function's arguments
let fetchAndSetSandwiches = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/sandwiches")
      .then(r => r.json())
      .then((sandwiches) => {
        dispatch(setSandwiches(sandwiches))
      })
  }
}

let setUser = (respObject) => {
  return {
    type: "SET_USER",
    payload: respObject
  }
}

let setSandwiches = (sandwichesArr) => {
  return {
    type: "SET_SANDWICHES",
    payload: sandwichesArr
  }
}

export default withRouter(connect(null, {setSandwiches, fetchAndSetSandwiches, setUser})(App))





















//
