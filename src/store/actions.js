import { getAppToken, getWebToken } from '../api/authentication'
import { setStorage } from '../utils/storage'
import { getSemesterList } from '../api/score'

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
      const message = error.substring(0, error.indexOf('，'))
      if (message === 'web token 错误') {
        try {
          const { user } = this.state
          await this.dispatch('getWebToken', user)
          const { webToken } = this.state
          const { semesterList } = await getSemesterList(webToken)
          await setStorage('semesterList', semesterList)
          commit('SET_SEMESTER_LIST', semesterList)
        } catch (error) {
          return Promise.reject(error)
        }
      } else {
        return Promise.reject(error)
      }
    }
  }
}
