export const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_ADDRESS: 'SET_ADDRESS'
}

export default (state = {}, action) => {
  switch(action.type) {
    case ACTIONS.SET_USER:
      return { ...action.payload }
    
    case ACTIONS.SET_ADDRESS:
      return { ...state, address: action.payload }
    
    default:
      return state
  }
}