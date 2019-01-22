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
    choose:Object
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求参数 商品id 获取
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
    //隐藏规格选择
    this.choose.hidePopUp();
    var index = event.detail.val;
    var select = event.detail.select;
    switch (parseInt(index)){
      case 1:
      {
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
          select = !select;
          if(select){
            this.choose.showPopUp();
            select = !select;
          }
          console.log("立即购买");
      }
        break;
      case 4:
      {
          //加入购物车
          select = !select;
          if (select) {
            this.choose.showPopUp();
            select = !select;
          }
          console.log("加入购物车");
      }
        break;
      default:
      break;
    } 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    console.log(this, 'this')
    //获得choose组件
    this.choose = this.selectComponent(".choose"); //组件的class
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