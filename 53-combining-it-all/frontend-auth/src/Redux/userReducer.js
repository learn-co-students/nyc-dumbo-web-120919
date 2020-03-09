let initialState = {
  user: {
    username: "",
    id: 0,
    sandwiches: []
  },
  token: ""
}

let userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }

    case "ADD_ONE_SANDWICH":
        return {
          ...state,
          user: {
            ...state.user,
            sandwiches: [...state.user.sandwiches, action.payload]
          }
        }

    default:
      return state
  }
}

export default userReducer
