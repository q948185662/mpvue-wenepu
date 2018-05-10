import wx from './wx'

const navigateTo = url => {
  wx.navigateTo({
    url
  })
}

export {
  navigateTo
}
