import wx from './wx'

const showToast = ({ title, icon = 'none', duration = 1500, mask = false }) => {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title,
      icon,
      duration,
      mask,
      success () {
        setTimeout(() => {
          resolve()
        }, duration)
      },
      fail (error) {
        reject(error)
      }
    })
  })
}

export {
  showToast
}
