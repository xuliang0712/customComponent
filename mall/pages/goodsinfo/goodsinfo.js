var WxParse = require('../../wxParse/wxParse.js');
//获取应用实例
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    g_id:'',
    model:{},
    chooseSize: false,
    animationData: {}
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
      //加载html标签
      WxParse.wxParse('article', 'html', res.data.g_content, this, 5);
    }, (err) => {
      console.log(err);
    });
  },
  //底部选择按钮点击事件
  selectBottomOnClick:function(event){
    var index = event.detail.val;
    switch (parseInt(index)){
      case 1:
      {
          this.chooseSize = false;
          //客服
          console.log("客服");
      }
        break;
      case 2:
      {
          //分享
          console.log("分享");
      }
        break;
      case 3:
      {
          //立即购买
          console.log("立即购买");
      }
        break;
      case 4:
      {
          //加入购物车
          console.log("加入购物车");
      }
        break;
      default:
      break;
    } 
  },
  //选择规格动画
  chooseSezi: function (e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(400).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      chooseSize: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 300)
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