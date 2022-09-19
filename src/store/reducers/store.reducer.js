export const ACTIONS = {
  SET_SELLER: 'SET_SELLER',
  ADD_ITEM: 'ADD_ITEM',
  UPDATE_ITEM: 'UPDATE_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

const initialState = {
  seller: '',
  cart: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.SET_SELLER:
      return {...state, seller: action.payload}
      
    case ACTIONS.ADD_ITEM:
      const contains = state.cart.filter(item => item._id === action.payload._id);

      if (contains.length > 0) {
        return {...state, cart: state.cart.map(item => {
          if (item._id === action.payload._id)
            item.qty += action.payload.qty
          return item
        })}
      }
      return {...state, cart: [...state.cart, action.payload]}
      
    case ACTIONS.UPDATE_ITEM:
      return {...state, cart: state.cart.map(item => {
        if (item._id === action.payload._id)
          item = action.payload
        return item
      })}
    
    case ACTIONS.REMOVE_ITEM:
      return { ...state, cart: state.cart.filter(item => item._id !== action.payload._id) }

    default:
      return state
  }
}