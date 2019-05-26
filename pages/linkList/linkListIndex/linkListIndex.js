Page({
  add: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListAdd/linkListAdd',
    })
  },
  sub: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListSub/linkListSub',
    })
  }
})