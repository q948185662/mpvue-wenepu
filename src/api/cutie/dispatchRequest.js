import adapter from './adapter'

const dispatchRequest = config => {
  return adapter(config).then(response => {
    return response
  }, reason => {
    return Promise.reject(reason)
  })
}

export default dispatchRequest
