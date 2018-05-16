const toString = Object.prototype.toString

const isArray = object => {
  return toString.call(object) === '[object Array]'
}

const forEach = (object, fn) => {
  if (object === null || typeof object === 'undefined') {
    return
  }
  if (typeof object !== 'object') {
    object = [object]
  }
  if (isArray(object)) {
    for (let i = 0, length = object.length; i < length; i++) {
      fn.call(null, object[i], i, object)
    }
  } else {
    for (let [ key, value ] of object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        fn.call(null, value, key, object)
      }
    }
  }
}

export {
  forEach
}
