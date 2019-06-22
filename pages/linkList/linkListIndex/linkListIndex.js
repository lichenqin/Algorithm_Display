Page({
  data: {
    list: [
      {
        id: 'Insert',
        name: '插入',
        open: false,
        pages: ['linkListAddTop', 'linkListAddMiddle', 'linkListAddBottom']
      }, {
        id: 'Delete',
        name: '删除',
        open: false,
        pages: ['linkListSubTop', 'linkListSubMiddle', 'linkListBottom']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
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