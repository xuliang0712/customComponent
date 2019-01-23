Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    model: {
      type:Object
    },
    isselect:{
      type:Boolean,
      value:false
    }
  },
  data: {
  
  },
  created(){
    console.log('created');
  },
  attached(){

  },
  methods: {
    //公有方法
    select_btn_onclick:function(event){
      
      this.setData({
        isselect: !this.data.isselect
      })
      this.isselect = !this.data.isselect;
    }
  }
})