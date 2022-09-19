import { ACTIONS } from '../reducers/store.reducer';

export default {
  selectSeller: (seller) => {
    return {
      type: ACTIONS.SET_SELLER,
      payload: seller
    }
  },
  addItem: (item) => {
    return {
      type: ACTIONS.ADD_ITEM,
      payload: item
    }
  },
  updateItem: (item) => {
    return {
      type: ACTIONS.UPDATE_ITEM,
      payload: item
    }
  },
  removeItem: (item) => {
    return {
      type: ACTIONS.REMOVE_ITEM,
      payload: item
    }
  }
}