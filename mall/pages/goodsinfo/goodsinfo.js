var WxParse = require('../../wxParse/wxParse.js');
//获取应用实例
const app = getApp()
const config = require('../../utils/config.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    g_id:'',
    model:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.g_id = options.g_id;
    //请求列表数据
    let that = this;
    let url = app.globalData.URL + 'detailed';
    let data = {
      g_id: that.g_id
    };
    app.wxRequest('POST', url, data, (res) => {
      that.setData({
        model: res.data,
      });
      WxParse.wxParse('article', 'html', res.data.g_content, this, 5);
    }, (err) => {
      console.log(err);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})