export default function ({ $axios }) {
  if (process.client) {
    $axios.setBaseURL('http://zefirus.hoteza.com:50780/api')
  }

  if (process.server) {
    $axios.setBaseURL('http://zefirus.hoteza.local/api')
  }
}
