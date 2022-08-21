import { signIn, signUp, validateSession, updateUser, signOut, includeAddress, updateAddress, deleteAddress } from '../services/apiService'
import userActions from '../store/actions/user.actions'

export default {
  register: (form) => dispatch => {
    return signUp(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  login: (form) => dispatch => {
    return signIn(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  authenticate: () => dispatch => {
    return validateSession().then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  update: (form) => dispatch => {
    return updateUser(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  updateAddress: (form) => dispatch => {
    return updateAddress(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  includeAddress: (form) => dispatch => {
    return includeAddress(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  removeAddress: (form) => dispatch => {
    return deleteAddress(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  logout: () => dispatch => {
    return signOut().then(result => {
      return dispatch(userActions.setUser({}))
    })
  }
}