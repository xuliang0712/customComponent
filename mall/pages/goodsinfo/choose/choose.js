//获取应用实例
const app = getApp();

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    model:{
      type:Object
    },
  },
  data:{
    // 弹窗显示控制
    isShow: false
  },
  methods:{
    //公有方法
    //显示弹窗
    showPopUp(){
      // console.log("啊哈哈哈");
      this.setData({
        isShow: true
      })
      // app.slideupshow(this, 'choose_anim', 50, 1);
    },
    //隐藏弹窗
    hidePopUp(){
      this.setData({
        isShow: false
      })
      // app.slideupshow(this, 'choose_anim', 0, 1);
    }
  }
})