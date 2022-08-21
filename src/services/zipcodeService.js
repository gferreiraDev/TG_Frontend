import axios from "axios"
const baseUrl = "https://viacep.com.br/ws"

export const searchZipcode = (zipcode) => {
  return axios({
    method: 'get',
    url: `${baseUrl}/${zipcode}/json`
  })
  .then(response => {
    return {
      streetName: response.data.logradouro,
      district: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
      zipcode: response.data.cep
    }
  })
  .catch(e => {
    return { error: true, message: e.response.data.message };
  })
}