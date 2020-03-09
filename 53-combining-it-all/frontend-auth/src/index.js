import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import sandwichReducer from './Redux/sandwichesReducer'
import userReducer from './Redux/userReducer'

import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import {compose} from 'redux'

let theSingleReducer = combineReducers({
  userInfo: userReducer,
  sandwichInfo: sandwichReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(theSingleReducer, composeEnhancers(applyMiddleware(thunk)))




















ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
