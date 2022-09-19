export const ACTIONS = {
  SET_THEME: 'SET_THEME',
}

const initialState = {
  theme: 'dark'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.payload }
    
    default:
      return state
  }
}