import { baseUrl } from '../config'
import cutie from './cutie'
import store from '../store'

let reRequestConfig = null

cutie.interceptors.request.use(config => {
  const { url } = config
  if (
    url !== baseUrl + '/authentication/web-token' &&
    url !== baseUrl + '/authentication/app-token'
  ) {
    reRequestConfig = config
  }
  return config
})

cutie.interceptors.response.use(async ({ data }) => {
  const { code } = data
  if (code === 200) {
    return data
  } else {
    const { message } = data
    const errorMessage = message.substring(0, message.indexOf('，'))
    if (errorMessage === 'web token 错误') {
      const { user } = store.state
      try {
        await store.dispatch('getWebToken', user)
        const { webToken } = store.state
        reRequestConfig.header.webToken = webToken
        return await cutie.request(reRequestConfig)
      } catch (error) {
        return Promise.reject(error)
      }
    } else if (errorMessage === 'app token 错误') {
      const { user } = store.state
      try {
        await store.dispatch('getAppToken', user)
        const { appToken } = store.state
        reRequestConfig.header.appToken = appToken
        return await cutie.request(reRequestConfig)
      } catch (error) {
        return Promise.reject(error)
      }
    } else {
      return Promise.reject(message)
    }
  }
})

const request = config => {
  config.url = baseUrl + config.url
  return cutie.request(config)
}

export default request
