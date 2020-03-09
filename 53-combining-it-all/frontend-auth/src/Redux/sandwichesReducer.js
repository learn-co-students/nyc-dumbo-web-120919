let initialState = {
  all: []
}


let sandwichReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_SANDWICHES":
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}

export default sandwichReducer
