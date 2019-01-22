//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    //轮播数据
    car_array: [],
    image_array:[],
    //列表数据
    item_array: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindCalouselViewTap:function(){
    wx.navigateTo({
      url: '../carousel/carousel'
    })
  },
  bindListItemViewTap: function (event){
    var g_id = event.currentTarget.dataset['g_id'];
    console.log(g_id);
    wx.navigateTo({
      url: '../goodsinfo/goodsinfo?g_id='+g_id,
    })
  },
  onLoad: function () {
    var that = this;
    //请求轮播数据
    let carurl = app.globalData.URL + 'indexbanner';
    app.wxRequest('POST', carurl, null, (res) => {
      var images = new Array();
      for (var i = 0; i < res.data.length; i++) {
        images.push(res.data[i].b_img);
      }
      that.setData({
        car_array:res.data,
        image_array:images
      })
    }, (err) => {
      console.log(err);
    });

    //请求列表数据
    let url = app.globalData.URL + 'goods';
    let data = {
      type: '4'
    };
    app.wxRequest('POST', url, data, (res) => {
      console.log(res.data);
      that.setData({
        item_array : res.data
      })
    }, (err) => {
      console.log(err);
    });



    
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
