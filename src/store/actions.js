import { getAppToken, getWebToken } from '../api/authentication'
import { setStorage } from '../utils/storage'

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
  }
}
