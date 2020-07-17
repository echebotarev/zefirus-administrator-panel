import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://zefirus.hoteza.com:50780/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getData(uri = '/reservation/list') {
    if (process.server) {
      apiClient.defaults.baseURL = 'http://zefirus.hoteza.local/api'
    }
    if (process.client) {
      apiClient.defaults.baseURL = 'http://zefirus.hoteza.com:50780/api'
    }

    return apiClient.get(uri)
  },
  sendData(uri, data) {
    apiClient.defaults.baseURL = 'http://zefirus.hoteza.com:50780/api'
    return apiClient.post(uri, data)
  },
}
