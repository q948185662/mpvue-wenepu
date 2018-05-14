import InterceptorManager from './InterceptorManager'
import dispatchRequest from './dispatchRequest'

class Cutie {
  constructor () {
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    }
  }
  request (config) {
    let chain = [ dispatchRequest, undefined ]
    let promise = Promise.resolve(config)
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })
    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor.fulfilled, interceptor.rejected)
    })
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
  }
}

export default Cutie
