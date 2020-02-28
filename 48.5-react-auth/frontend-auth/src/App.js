import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {withRouter} from 'react-router-dom'

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
    if (localStorage.getItem("token")) {

      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(this.handleResp)
    }
  }

  addOneSnack = (snackObj) => {

    let copyOfUser = {
      ...this.state.user,
      snacks: [...this.state.user.snacks, snackObj]
    }

    this.setState({
      user: copyOfUser
    })

  }

  handleResp = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    }
    else {
      alert(resp.error)
    }
  }

  handleLoginSubmit = (userInfo) => {
    return fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(this.handleResp)
  }

  handleRegisterSubmit = (userInfo) => {
    return fetch(`http://localhost:4000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(this.handleResp)
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer user={this.state.user} token={this.state.token} addOneSnack={this.addOneSnack} />
  }

  render(){
    console.log(this.state, "APP");
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

export default withRouter(App)
