Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  methods: {
    //1.客服 2.分享 3.立即购买 4.加入购物车
    btn_on_click: function (event){
      var that = this;
      var val = event.target.dataset.index; //通过这个传递数据
      console.log(val);
      var myEventDetail = {
        val: val
      } // detail对象，提供给事件监听函数

      //select_btn_onclick_event自定义名称事件，父组件中使用
      this.triggerEvent('select_btn_onclick_event', myEventDetail)  
    }
  }
})