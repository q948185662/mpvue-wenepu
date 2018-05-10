import wx from './wx'

const showNavigationBarLoading = title => {
  wx.showNavigationBarLoading()
  wx.setNavigationBarTitle({
    title
  })
}

const hideNavigationBarLoading = title => {
  wx.setNavigationBarTitle({
    title
  })
  wx.hideNavigationBarLoading()
}

export {
  showNavigationBarLoading,
  hideNavigationBarLoading
}
