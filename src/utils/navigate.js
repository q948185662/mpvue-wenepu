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

const navigateBack = url => {
  wx.navigateBack({
    url
  })
}

export {
  navigateTo,
  reLaunch,
  navigateBack
}
