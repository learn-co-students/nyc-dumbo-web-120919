export const addOneBrit = (britishObject) => {
  return {
    type: "ADD_ONE_BRIT",
    payload: britishObject
  }
}

export const deleteOneBrit = (name) => {
  return {
    type: "DELETE_ONE_BRIT",
    payload: name
  }
}
