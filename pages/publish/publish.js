//publish.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      { name: '1', value: '没带伞' },
      { name: '2', value: '取快递', checked: 'true' },
      { name: '3', value: '问题解答' },
    ],
    address:"请点击此处选择您的位置"
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  selectLocation:function(){
    var that=this;
    wx.chooseLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        console.log(res.address);
        that.setData({
          address:res.address
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onLoad:function(){
   

  }
})
