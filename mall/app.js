//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          //已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success:res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    URL: 'https://www.qichuangzhongguo.com/api/',
    header:'14e45d3de0b73c88f0b510bafc3bf6b6',
    userInfo: null
  },
  
  /**
  * 封装wx.request请求
  * method： 请求方式
  * url: 请求地址
  * data： 要传递的参数
  * callback： 请求成功回调函数
  * errFun： 请求失败回调函数
  **/
  wxRequest(method, url, data, callback, errFun) {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': method == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization':'Bearer '+this.globalData.header
      },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        callback(res.data);
      },
      fail: function (err) {
        console.log(err);
        errFun(res);
      }
    })
  },


  //渐入，渐出实现
  show: function (that, param, opacity) {
    var animation = wx.createAnimation({
      //持续时间800ms
      duration: 1200,
      timingFunction: 'ease',
    });
    //var animation = this.animation
    animation.opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },
  //滑动渐入渐出
  slideupshow: function (that, param, px, opacity) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateY(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },
  //向右滑动渐入渐出
  sliderightshow: function (that, param, px, opacity) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateX(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  }

})
