import { ACTIONS } from '../reducers/user.reducer';

export default {
  setUser: (userData) => {
    return {
      type: ACTIONS.SET_USER,
      payload: userData
    }
  },
  setAddress: (address) => {
    return {
      type: ACTIONS.SET_ADDRESS,
      payload: address
    }
  },
  setAvatar: (avatar) => {
    return {
      type: ACTIONS.SET_AVATAR,
      payload: avatar
    }
  }
}