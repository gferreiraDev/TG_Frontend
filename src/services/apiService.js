import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
const baseUrl = "http://192.168.15.7:3001"
const headers = {
  'Content-Type': 'Application/json'
}

export const signUp = (data) => {
  // console.log('SIGN UP (SERVICE)', data);

  return axios.post(`${baseUrl}/user/register`, data)
  .then(response => {
    // console.log('RESPONSE', response.data); 
    return response.data
  })
  .catch(e => {
    // console.log('ERROR', e);
    return { error: true, message: 'Erro ao tentar realizar o cadastro. Tente novamente mais tarde.' }
  })
}

export const signIn = (data) => {
  // console.log('SIGN IN (SERVICE)', data);

  return axios.post(`${baseUrl}/user/login`, data)
  .then(response => {
    // console.log('RESPONSE', response.data)

    return setAsyncData('token', `Bearer ${response.data.token}`)
    .then((result) => {
      // console.log(result)
      return response.data.user
    })
  })
  .catch(e => {
    // console.log('ERROR', e);
    return { error: true, message: 'Erro ao tentar logar. Tente novamente mais tarde.' }
  })
}

export const validateSession = async () => {
  const token = await getAsyncData('token');
  // console.log('TOKEN', token)

  if (token)
    return axios.get(`${baseUrl}/user/authenticate`, {headers: {'Authorization': token}})
    .then(response => {
      // console.log('TOKEN RESPONSE', response.data);
      return response.data
    })

  else
    return { error: true, message: 'Token não encontrado' }
}

export const updateUser = async (data) => {
  const token = await getAsyncData('token');

  return axios.put(`${baseUrl}/user/update`, data, {headers: {...headers, 'Authorization': token}})
  .then(response => {
    // console.log('UPDATE SERVICE RESPONSE', response.data);
    return response.data
  })
  .catch(e => {
    // console.log('ERROR', e);
    return { error: true, message: 'Erro ao tentar atualizar dados. Tente novamente mais tarde.' }
  })
}

export const includeAddress = async (data) => {
  const token = await getAsyncData('token');

  return axios.post(`${baseUrl}/user/address`, data, {headers: {...headers, 'Authorization': token}})
  .then(response => {
    // console.log('INCLUDE SERVICE RESPONSE', response.data);
    return response.data
  })
  .catch(e => {
    // console.log('ERROR', e);
    return { error: true, message: 'Erro ao tentar incluir endereço. Tente novamente mais tarde.' }
  })
}

export const updateAddress = async(data) => {
  const token = await getAsyncData('token');
  // console.log(token);

  return axios.put(`${baseUrl}/user/address`, data, {headers: {...headers, 'Authorization': token}})
  .then(response => {
    // console.log('ADDRESS SERVICE RESPONSE', response.data);
    return response.data
  })
  .catch(e => {
    // console.log('ERROR', e);
    return { error: true, message: 'Erro ao tentar atualizar dados. Tente novamente mais tarde.' }
  })
}

export const deleteAddress = async (data) => {
  const token = await getAsyncData('token');
  // console.log(token);

  return axios.delete(`${baseUrl}/user/address/${data}`, {headers: {...headers, 'Authorization': token}})
  .then(response => {
    // console.log('ADDRESS SERVICE RESPONSE', response.data);
    return response.data
  })
  .catch(e => {
    // console.log('ERROR', e);
    return { error: true, message: 'Erro ao tentar remover endereço. Tente novamente mais tarde.' }
  })
}

export const signOut = async() => {
  const token = await removeAsyncData('token')
  // console.log('TOKEN OUT', token)
  return token
}


/* ASYNC STORAGE HANDLERS */
const setAsyncData = (key, value) => {
  return AsyncStorage.setItem(key, value, (result) => result)
}

const getAsyncData = (key) => {
  return AsyncStorage.getItem(key, (result) => result)
}

const removeAsyncData = (key) => {
  return AsyncStorage.removeItem(key, (result) => result)
}