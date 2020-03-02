import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'

import NavBar from './components/NavBar'
import Form from './components/Form'
import BurgerContainer from './containers/BurgerContainer'

class App extends React.Component {

  state = {
    user: {
      username: "",
      past_orders: []
    },
    token: "",
    burgers: []
  }

  componentDidMount() {
   if (localStorage.getItem("token")){
     fetch("http://localhost:4000/persist", {
       headers: {
         "Authorization": `Bearer ${localStorage.token}`
       }
     })
       .then(r => r.json())
       .then(this.handleResp)
    }

    fetch("http://localhost:4000/burgers")
      .then(r => r.json())
      .then(burgers => {
        this.setState({
          burgers: burgers
        })
      })
  }

  handleResp = (resp) => {
   if (resp.user) {
     localStorage.token = resp.token
     this.setState(resp, () => {
       this.props.history.push("/burgers")
     })
   }
   else {
     alert(resp.message)
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

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm }/>
          <Route path="/burgers">
            <BurgerContainer burgers={this.state.burgers} user={this.state.user}/>
          </Route>
        </Switch>
      </div>
    )
  }

}

export default withRouter(App)  ;
