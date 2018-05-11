import request from './request'

const getSemesterList = webToken => request({
  url: '/semesters',
  header: {
    webToken
  }
})

const getScores = (semester, webToken) => request({
  url: '/scores',
  data: {
    semester
  },
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    webToken
  }
})

export {
  getSemesterList,
  getScores
}
