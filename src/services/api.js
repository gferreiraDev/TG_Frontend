import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://192.168.15.7:3001',
  timeout: 1000,
  headers: {'Content-Type': 'Application/json'}
})

export default {
  signUp: (formData) => {
    return api.post('/user/register', formData)
    .then(({data}) => {
      console.log(data)
      return data
    })
    .catch(error => {
      return error.response.data
    })
  },
  signIn: (formData) => {
    return api.post('/user/login', formData)
    .then(({data}) => {
      console.log(data)
      
      return setAsyncData('token', `Bearer ${data.token}`)
      .then(() => {
        return data.user
      })
    })
    .catch(error => {
      return error.response.data
    })
  },
  validateSession: () => {
    return getAsyncData('token')
    .then(token => {
      console.log('token', token);
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.get('/user/authenticate', {headers: {Authorization: token}})
      .then(({data}) => {
        console.log(data)
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
  signOut: () => {
    return removeAsyncData('token').then(token => token)
  },
  updateUser: (formData) => {
    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.put('/user/update', formData, {headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }})
      .then(({data}) => {
        console.log(data)      
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
  includeAddress: (formData) => {
    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.post('/user/address', formData, {headers: {Authorization: token}})
      .then(({data}) => {
        console.log(data)
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
  updateAddress: (formData) => {
    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.put('/user/address', formData, {headers: {Authorization: token}})
      .then(({data}) => {
        console.log(data)      
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
  deleteAddress: (formData) => {
    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.delete(`/user/address/${formData}`, {headers: {Authorization: token}})
      .then(({data}) => {
        console.log(data)      
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
  searchSellers: (formData) => {
    console.log(`Receiving position: ${formData}`);

    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.get('/user/list', {headers: {Authorization: token}})
      .then(({data}) => {
        console.log(data)      
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },

  updateAvatar: (formData) => {
    // console.log('FormData', JSON.stringify(formData));

    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.post('/user/avatar', formData, {headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      }}).then(({data}) => {
        console.log(data)      
        return data
      }).catch(error => {
        return error
      })
    })
  },

  includeProduct: (formData) => {
    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.post('/stock/add', formData, {headers: {Authorization: token}})
      .then(({data}) => {
        return data.products
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
  getProducts: (seller, search) => {
    return api.post('/product/list', {seller, search})
    .then(({data}) => {
      return data
    })
    .catch(error => {
      return error.response.data
    })
  },
  updateProduct: (formData) => {
    return getAsyncData('token')
    .then(token => {
      if (!token)
        return ({error: true, message: 'Token inválido'})

      return api.patch('/stock/update', formData, {headers: {Authorization: token}})
      .then(({data}) => {
        console.log(data)
        return data
      })
      .catch(error => {
        return error.response.data
      })
    })
  },
}

/* ASYNC STORAGE HANDLERS */
const setAsyncData = async (key, value) => {
  return await AsyncStorage.setItem(key, value, (result) => result)
}

const getAsyncData = async (key) => {
  return await AsyncStorage.getItem(key, (result) => result)
}

const removeAsyncData = async (key) => {
  return await AsyncStorage.removeItem(key, (result) => result)
}