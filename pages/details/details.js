var url = "http://www.imooc.com/course/ajaxlist";
var page = 0;
var page_size = 20;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;


// 获取数据的方法，具体怎么获取列表数据大家自行发挥  
var GetList = function (that) {
  that.setData({
    hidden: false
  });
  // wx.request({
  //   url: url,
  //   data: {
  //     page: page,
  //     page_size: page_size,
  //     sort: sort,
  //     is_easy: is_easy,
  //     lange_id: lange_id,
  //     pos_id: pos_id,
  //     unlearn: unlearn
  //   },
  //   success: function (res) {
  //     //console.info(that.data.list);  
  //     var list = that.data.list;
  //     for (var i = 0; i < res.data.list.length; i++) {
  //       list.push(res.data.list[i]);
  //     }
  //     that.setData({
  //       list: list
  //     });
  //     page++;
  //     that.setData({
  //       hidden: true
  //     });
  //   }
  // });
  var list=[];
  
  // for(var i=0;i<5;i++){
    var item ={
      head_url:"http://img.dongqiudi.com/uploads/avatar/2015/07/25/QM387nh7As_thumb_1437790672318.jpg",
      nick_name: "Magicwo",
      wechat_id:"微信号：xyz-sssss",
      content: "谁来帮我取个快递",
      address: "kb125",
      clock: "刚刚"
    }
   list.push(item);
   var item1 = {
     head_url: "http://img5.imgtn.bdimg.com/it/u=3245780674,242766829&fm=27&gp=0.jpg",
     nick_name: "小幸运",
     wechat_id: "微信号：qqt123456",
     content: "下大雨了，被困在图书馆外面了,有人在图书馆吗",
     address: "图书馆",
     clock:"刚刚"
   }
   list.push(item1);
   var item2 = {
     head_url: "http://up.qqya.com/allimg/201710-t/17-101802_69236.jpg",
     nick_name: "浮萍逝水",
     wechat_id: "微信号：once-xiang",
     content: "谁来帮我取个快递",
     address: "kb222",
     clock: "刚刚"
   }
   list.push(item2);
   var item3 = {
     head_url: "http://www.feizl.com/upload2007/2011_11/111114031328587.jpg",
     nick_name: "哒哒哒",
     wechat_id: "微信号：ddd_nice",
     content: "谁来帮我取个快递",
     address: "经管楼b402",
     clock: "2分钟前"
   }
   list.push(item3);
   var item4 = {
     head_url: "http://img4.imgtn.bdimg.com/it/u=3960472725,4292408921&fm=27&gp=0.jpg",
     nick_name: "沃势如暴雨",
     wechat_id: "微信号：srby_larry",
     content: "谁来帮我取个快递",
     address: "主楼a206",
     clock: "5分钟前"
   }
   list.push(item4);
  // }
  that.setData({
    list: list
  });
  that.setData({
    hidden: true
  });

}
Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0
  },
  onLoad: function () {
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值  
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  onShow: function () {
    //  在页面展示之后先获取一次数据  
    var that = this;
    GetList(that);
  },
  bindDownLoad: function () {
    //  该方法绑定了页面滑动到底部的事件  
    var that = this;
    GetList(that);
  },
  scroll: function (event) {
    //  该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。  
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    //  该方法绑定了页面滑动到顶部的事件，然后做上拉刷新  
    page = 0;
    this.setData({
      list: [],
      scrollTop: 0
    });
    GetList(this)
  }
})  