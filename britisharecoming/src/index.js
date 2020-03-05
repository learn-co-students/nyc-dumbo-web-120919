import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// REDUX FUN BEGINS HERE
import { createStore } from 'redux'

let initialState = {
  guns: [],
  counter: 0
}
// reducer is func def
// the return value of reducer becomes the new global state
const reducer = (state = initialState, action) => {
  console.log("HELLO FROM INSIDE THE REDUCER", action);

  switch (action.type) {
    case "INCREASE_COUNTER":
      let theNumberBeingIncreased = action.payload

      return {
        ...state,
        counter: state.counter + theNumberBeingIncreased,
        guns: [...state.guns, {name: "Musket 4000"}]
      }

    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: state.counter - action.payload.number
      }
    default:
      return state
  }
}




let theStoreObject = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(theStoreObject.getState(), "BEFORE");

let actionToIncreaseBy2 = {type: "INCREASE_COUNTER", payload: 2}
let actionToDecreaseBy100 = {type: "DECREASE_COUNTER", payload: {number: 100} }


theStoreObject.dispatch(actionToDecreaseBy100)
theStoreObject.dispatch(actionToIncreaseBy2)
// theStoreObject.dispatch(actionToIncreaseBy2)
// theStoreObject.dispatch(actionToIncreaseBy2)



console.log(theStoreObject.getState(), "AFTER");






















ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();









































//
