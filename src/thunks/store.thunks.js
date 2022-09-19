import storeActions from '../store/actions/store.actions'

export default {
  selectSeller: (seller) => dispatch => {
    return dispatch(storeActions.selectSeller(seller))
  },
  addToCart: (product) => dispatch => {
    return dispatch(storeActions.addItem(product))
  },
  updateCart: (product) => dispatch => {
    return dispatch(storeActions.updateItem(product))
  },
  removeFromCart: (product) => dispatch => {
    return dispatch(storeActions.removeItem(product))
  }
}