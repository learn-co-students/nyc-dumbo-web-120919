import data from '../data'

let initialState = {
  brits: data,
  counter: 0
}
// reducer is func def
// the return value of reducer becomes the new global state
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_ONE_BRIT":
      let theNewBritBeingAdded = action.payload
      let theAdditionalArray = [theNewBritBeingAdded, ...state.brits]
      return {
        ...state,
        brits: theAdditionalArray
      }

    default:
      return state
  }
}


export default reducer
