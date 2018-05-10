import request from './request'

const getAppToken = user => request({
  url: '/authentication/app-token',
  method: 'POST',
  data: user,
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

const getWebToken = user => request({
  url: '/authentication/web-token',
  method: 'POST',
  data: user,
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

export {
  getAppToken,
  getWebToken
}
