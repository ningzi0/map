
const swiperList = [
  'https://image.meiye.art/pic_1702968405660',
  'https://image.meiye.art/pic_1702710706470',
];
Component({
  data: {
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    footerText: '加载中...',
    gridData:[
      {
        "text":"分类文字",
        "img":"/assets/grid1.png"
      },{
        "text":"分类文字",
        "img":"/assets/grid2.png"
      },{
        "text":"分类文字",
        "img":"/assets/grid3.png"
      },{
        "text":"分类文字",
        "img":"/assets/grid4.png"
      }
    ],
    
   
  },
  created(){
  },
  methods: {
    onReachBottom(){
        wx.showLoading({
          title: '加载中',
        })
        setInterval(() => {
          wx.hideLoading({
            success: (res) => {},
          })
          this.setData({"footerText":"加载完毕，没有更多了..."})
        }, 2000);
    }
  },
});