import request from './request'

const getSemesterList = webToken => request({
  url: '/semesters',
  header: {
    webToken
  }
})

export {
  getSemesterList
}
