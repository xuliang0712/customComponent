// 加载配置文件
const config = require('../config.js');



// /**
//   * 封装wx.request请求
//   * method： 请求方式
//   * url: 请求地址
//   * data： 要传递的参数
//   * callback： 请求成功回调函数
//   * errFun： 请求失败回调函数
//   **/
// wxRequest(method, url, data, callback, errFun){
//   wx.request({
//     url: this.API_HOST + url,
//     method: method,
//     data: data,
//     header: {
//       'content-type': method == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
//       'Accept': 'application/json',
//       'Authorization': 'Bearer ' + this.globalData.header
//     },
//     dataType: 'json',
//     success: function (res) {
//       console.log(res);
//       callback(res.data);
//     },
//     fail: function (err) {
//       console.log(err);
//       errFun(res);
//     }
//   })
// }