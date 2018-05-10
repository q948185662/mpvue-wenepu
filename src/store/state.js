import { getStorageSync } from '../utils/storage'

export default {
  appToken: getStorageSync('appToken') || '',
  webToken: getStorageSync('webToken') || ''
}
