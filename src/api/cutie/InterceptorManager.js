import { forEach } from './utils'

class InterceptorManager {
  constructor () {
    this.handlers = []
  }
  use (fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    })
    return this.handlers.length - 1
  }
  forEach (fn) {
    forEach(this.handlers, handler => {
      if (handler !== null) {
        fn(handler)
      }
    })
  }
}

export default InterceptorManager
