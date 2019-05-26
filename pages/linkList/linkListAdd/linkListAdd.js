Page({
  top: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListAddTop/linkListAddTop',
    })
  },
  middle: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListAddMiddle/linkListAddMiddle',
    })
  },
  bottom: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListAddBottom/linkListAddBottom',
    })
  }
})