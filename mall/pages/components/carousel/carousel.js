Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    //这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    imgUrls:Array
  },
  data: {
    //这里是一些组件内部数据
    someData: {},
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://p3.pstatp.com/large/43700001e49d85d3ab52',
      'https://p3.pstatp.com/large/39f600038907bf3b9c96',
      'https://p3.pstatp.com/large/31fa0003ed7228adf421'
    ],
    links: [
      '../user/user',
      '../user/user',
      '../user/user'
    ]
  },
  methods: {
    // 这里是一个自定义方法
    customMethod() { },
    //轮播图的切换事件 
    swiperChange: function (e) {
      this.setData({ swiperCurrent: e.detail.current })
    },
    //点击指示点切换 
    chuangEvent: function (e) {
      this.setData({ swiperCurrent: e.currentTarget.id })
    },
    //点击图片触发事件  
    swipclick: function (e) {
      console.log(this.data.swiperCurrent);
      wx.switchTab({
        url: this.data.links[this.data.swiperCurrent]
      })
    },
  }
})
