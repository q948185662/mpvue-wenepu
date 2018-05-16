import request from './request'

const getCurrentWeek = (
  currentDate,
  appToken
) => request({
  url: '/time/current',
  method: 'POST',
  data: {
    currentDate
  },
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    appToken
  }
})

export {
  getCurrentWeek
}
