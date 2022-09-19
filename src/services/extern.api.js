import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.7:5000/products',
  timeout: 1000,
  headers: {'Content-Type': 'Application/json'}
})

export default {
  searchProduct: (query) => {
    console.log(`Searching for: ${query}`);

    if (query) {
      return api.get(`/search/${query}`)
      .then(({data}) => {
        return data
      })
      .catch(error => {
        return error.response.data
      })
    } else {
      return api.get(`/list`)
      .then(({data}) => {
        return data
      })
      .catch(error => {
        return error.response.data
      })
    }

  },
}