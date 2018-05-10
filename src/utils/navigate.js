import wx from './wx'

const navigateTo = url => {
  wx.navigateTo({
    url
  })
}

const reLaunch = url => {
  wx.reLaunch({
    url
  })
}

export {
  navigateTo,
  reLaunch
}
