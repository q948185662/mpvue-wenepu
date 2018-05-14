import wx from '../../utils/wx'

const adapter = config => {
  return new Promise((resolve, reject) => {
    config.success = response => {
      resolve(response)
    }
    config.fail = error => {
      reject(error)
    }
    wx.request(config)
  })
}

export default adapter
