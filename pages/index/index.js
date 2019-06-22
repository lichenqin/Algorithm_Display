Page({
  sort: function () {
    wx.navigateTo({
      url: '/pages/sort/sortIndex/sortIndex',
    })
  },
  linklist: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListIndex/linkListIndex',
    })
  },
  BTree: function () {
    wx.navigateTo({
      url: '/pages/BTree/BTreeIndex/BTreeIndex',
    })
  }

})