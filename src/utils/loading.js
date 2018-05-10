import wx from './wx'

const showNavigationBarLoading = title => {
  wx.showNavigationBarLoading()
  wx.setNavigationBarTitle({
    title
  })
}

export {
  showNavigationBarLoading
}
