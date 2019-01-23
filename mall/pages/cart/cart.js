//获取应用实例
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[],
    isallselect:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求列表数据
    let that = this;
    let url = app.globalData.URL + 'getShopCartList';
    let data = {};
    app.wxRequest('POST', url, data, (res) => {
      that.setData({
        dataArr: res.data,
      });
      that.dataArr = res.data;
    }, (err) => {
      console.log(err);
    });
  },

  //全选按钮点击
  select_all_btn:function(event){
    this.setData({
      isallselect: !this.data.isallselect
    })
    for (var i = 0; i < this.dataArr.length;i++){
      //获得choose组件
      var id = '#index'+i;
      var choose = this.selectComponent(id); //组件的class
      choose.isselect = !choose.isselect;
      choose.setData({
        isselect: !choose.isselect
      })
      this.setData({
        
      })
      console.log(choose);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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