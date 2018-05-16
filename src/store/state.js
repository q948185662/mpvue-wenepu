import { getStorageSync } from '../utils/storage'

export default {
  appToken: getStorageSync('appToken') || '',
  webToken: getStorageSync('webToken') || '',
  user: getStorageSync('user') || {},
  semesterList: getStorageSync('semesterList') || [
    '全部学期'
  ],
  scores: {},
  scoreDetail: {},
  currentWeek: getStorageSync('currentWeek') || {},
  courseTable: getStorageSync('courseTable') || {}
}
