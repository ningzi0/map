// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userBg:"/assets/mybg.jpg",
    userData:[
      {
        "icon":"heart",
        "text":"我的收藏",
        "url":"/pages/collect/collect"
      },
      {
        "icon":"chat-message",
        "text":"我的消息",
        "url":"/pages/empty/empty"
      },
      {
        "icon":"user-arrow-up",
        "text":"我要入驻",
        "url":"/pages/empty/empty"
      }
    ]
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
  getUserInfo(e){
    console.log(e)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})