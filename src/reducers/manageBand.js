export default function manageBand(state = {
  bands: [],
}, action) {
  console.log("STATE:", state)
  console.log("ACTION:", state)
  switch (action.type) {
    case "ADD_BAND":
      return {
        ...state,
        bands: [...state.bands, action.payload]
      }
  
    default:
      return state
  }
};
