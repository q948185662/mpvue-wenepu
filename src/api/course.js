import request from './request'

const getCourseTable = (
  semester,
  weekly,
  userName,
  webToken
) => request({
  url: '/courses/table',
  method: 'POST',
  data: {
    semester,
    weekly,
    userName
  },
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    webToken
  }
})

export {
  getCourseTable
}
