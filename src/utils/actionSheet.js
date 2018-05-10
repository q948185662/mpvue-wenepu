import wx from './wx'

const showActionSheet = itemList => {
  return new Promise((resolve, reject) => {
    wx.showActionSheet({
      itemList,
      success ({ tapIndex }) {
        resolve(tapIndex)
      },
      fail (error) {
        reject(error)
      }
    })
  })
}

export {
  showActionSheet
}
