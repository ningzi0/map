// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerText: '加载中...',
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