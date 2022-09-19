import api from '../services/api'
import userActions from '../store/actions/user.actions'

export default {
  register: (form) => dispatch => {
    return api.signUp(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  login: (form) => dispatch => {
    return api.signIn(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  authenticate: () => dispatch => {
    return api.validateSession().then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  update: (form) => dispatch => {
    return api.updateUser(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  updateAddress: (form) => dispatch => {
    return api.updateAddress(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  includeAddress: (form) => dispatch => {
    return api.includeAddress(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  removeAddress: (form) => dispatch => {
    return api.deleteAddress(form).then(result => {
      if (result.error)
        return result
      return dispatch(userActions.setUser(result))
    })
  },

  logout: () => dispatch => {
    return api.signOut().then(() => {
      return dispatch(userActions.setUser({}))
    })
  },

  updateAvatar: (formData) => dispatch => {
    return api.updateAvatar(formData).then(result => {
      console.log('thunks result', result)
      // if (result.error)
        return
      // return dispatch(userActions.setAvatar(result))
    })
  }
}