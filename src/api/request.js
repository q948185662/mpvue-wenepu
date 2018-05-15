import { baseUrl } from '../config'
import cutie from './cutie'

cutie.interceptors.response.use(async ({ data }) => {
  const { code } = data
  if (code === 200) {
    return data
  } else if (code === 500) {
    return Promise.reject('服务器错误')
  } else {
    const { message } = data
    return Promise.reject(message)
  }
})

const request = config => {
  const { url } = config
  config.url = baseUrl + url
  return cutie.request(config)
}

export default request
