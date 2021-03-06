//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    map_height:380
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  //事件处理函数
  bindButtonTap: function () {
    wx.navigateTo({
      url: '../publish/publish'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that = this;
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);
      that.setData({
        longitude: locationInfo.longitude
        , latitude: locationInfo.latitude
        , markers: [
          {
            id: 0
            , iconPath: "../images/1.png"
            , longitude: locationInfo.longitude
            , latitude: locationInfo.latitude
            , width: 30
            , height: 30
          }
        ]
      })
    })

    //set the width and height
    // 动态设置map的宽和高
    wx.getSystemInfo({
      success: function (res) {
        console.log('getSystemInfo');
        console.log(res.windowWidth);
        that.setData({
          map_height: res.windowHeight*2/3
          //map_height: 380
          , controls: [{
            id: 1,
            iconPath: '../images/2.png',
            position: {
              left: res.windowWidth / 2 - 8,
              top: res.windowHeight / 2 - 16,
              width: 30,
              height: 30
            },
            clickable: true
          }]
        })
      }
    })
  

  },
  //获取中间点的经纬度，并mark出来
   getLngLat: function () {
    var that = this;
    this.mapCtx = wx.createMapContext("map4select");
    this.mapCtx.getCenterLocation({
      success: function (res) {

        that.setData({
          longitude: res.longitude
          , latitude: res.latitude
          , markers: [
            {
              id: 0
              , iconPath: "../images/2.png"
              , longitude: res.longitude
              , latitude: res.latitude
              , width: 30
              , height: 30
            }
          ]
        })

      }
    })
  }
   ,regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是用户选择的位置
    if(e.type == 'end') {
      this.getLngLat()
    }
  }
  , markertap(e) {
    console.log(e)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
