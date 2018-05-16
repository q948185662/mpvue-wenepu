import { getAppToken, getWebToken } from '../api/authentication'
import { setStorage } from '../utils/storage'
import { getSemesterList, getScores, getScoreDetail } from '../api/score'
import { getCurrentDate, fixWeek } from '../utils/date'
import { getCurrentWeek } from '../api/time'
import { getCourseTable } from '../api/course'

export default {
  async getAppToken ({ commit }, user) {
    try {
      const { appToken } = await getAppToken(user)
      await setStorage('appToken', appToken)
      commit('SET_APP_TOKEN', appToken)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getWebToken ({ commit }, user) {
    try {
      const { webToken } = await getWebToken(user)
      await setStorage('webToken', webToken)
      commit('SET_WEB_TOKEN', webToken)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async bindUser ({ commit }, user) {
    try {
      await Promise.all([
        this.dispatch('getAppToken', user),
        this.dispatch('getWebToken', user)
      ])
      await setStorage('user', user)
      commit('SET_USER', user)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getSemesterList ({ commit }) {
    try {
      const { webToken } = this.state
      const { semesterList } = await getSemesterList(webToken)
      await setStorage('semesterList', semesterList)
      commit('SET_SEMESTER_LIST', semesterList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getScores ({ commit }, semester) {
    try {
      const { webToken } = this.state
      const { scores } = await getScores(semester, webToken)
      await setStorage('semester', semester)
      commit('SET_SCORES', scores)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getScoreDetail ({ commit }, scoreDetailUrl) {
    try {
      const { webToken } = this.state
      const { scoreDetail } = await getScoreDetail(scoreDetailUrl, webToken)
      commit('SET_SCORE_DETAIL', scoreDetail)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getCurrentWeek ({ commit }) {
    try {
      const { appToken } = this.state
      const currentDate = getCurrentDate()
      let { currentTime: currentWeek } = await getCurrentWeek(currentDate, appToken)
      currentWeek = fixWeek(currentWeek)
      await setStorage('currentWeek', currentWeek)
      commit('SET_CURRENT_WEEK', currentWeek)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getCourseTable ({ commit }) {
    try {
      const { webToken } = this.state
      const { semester, weekly } = this.state.currentWeek
      const { userName } = this.state.user
      const { courseTable } = await getCourseTable(
        semester,
        weekly,
        userName,
        webToken
      )
      await setStorage('courseTable', courseTable)
      commit('SET_COURSE_TABLE', courseTable)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
