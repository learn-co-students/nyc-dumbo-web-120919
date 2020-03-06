import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
// REDUX FUN BEGINS HERE
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import britReducer from './Redux/britReducer'


let theStoreObject = createStore(britReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={theStoreObject}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






// KEYWORDS: prop of `store` in Provider, connect, Provider, createStore

// 0) npm install react-redux
// 0.0) npm install redux
// 1) import {createStore} from 'redux'
// 2) let theStoreObject = createStore(reducer)
// 3) import {Provider} from 'react-redux'
// 4) <Provider store={theStoreObject}>
  //   <App />
  // </Provider>
// 5) connect your components to the redux store
  // 5.5) export default connect(mapStateToProps, {actionCreator})(componentName)

































//
