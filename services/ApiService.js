import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://zefirus.hoteza.local/api`,
  browserBaseURL: `http://zefirus.hoteza.com:50780/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getData(uri = '/reservation/list') {
    return apiClient.get(uri)
  },
  sendData(uri, data) {
    return apiClient.post(uri, data)
  },
}
