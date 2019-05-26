Page({
  bubble: function () {
    wx.navigateTo({
      url: '/pages/sort/BubbleSort/BubbleSort',
    })
  },
  select: function () {
    wx.navigateTo({
      url: '/pages/sort/SelectSort/SelectSort',
    })
  },
  insert: function () {
    wx.navigateTo({
      url: '/pages/sort/InsertSort/InsertSort',
    })
  },
  quick: function () {
    wx.navigateTo({
      url: '/pages/sort/QuickSort/QuickSort',
    })
  }

})