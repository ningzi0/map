// pages/MerchantDetails/MerchantDetails.js
import Toast from 'tdesign-miniprogram/toast/index';
const swiperList = [
  'https://image.meiye.art/pic_1702968405660',
  'https://image.meiye.art/pic_1702710706470',
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerText: '加载中...',
    show:true,
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    info:[
      {
        icon:"time",
        timeName:"开店时间：",
        timeDate:"AM-09:00:00"
      },{
        icon:"minus-circle",
        timeName:"关店时间：",
        timeDate:"PM-10:30:00"
      },{
        icon:"error-circle",
        timeName:"商家介绍：",
        timeDate:"这里是商家介绍内容文字这里是商家介绍内容文字这里是商家介绍内容文字"
      }
    ]
  },
  click(){
    if(this.data.show){
      Toast({
        context: this,
        selector: '#t-toast',
        message: '已收藏，可以在我的->收藏里找到我哦！',
      });
    }else{
      Toast({
        context: this,
        selector: '#t-toast',
        message: '已取消收藏，无法在我的->收藏里找到我哦！',
      });
    }
    this.setData({
      show:!this.data.show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    wx.showLoading({
      title: '加载中',
    })
    setInterval(() => {
      wx.hideLoading({
        success: (res) => {},
      })
      this.setData({"footerText":"加载完毕，没有更多了..."})
    }, 2000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})