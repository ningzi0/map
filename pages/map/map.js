// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mapData:[
      {
        imgUrl:'https://image.meiye.art/Fiqu1rdvBTtiv5lt-htOJ-xyaSyb',
        titName:'城市逃离地图',
        des:'逃离城市喧嚣，释放自由的灵魂，别赶时间，去感受时间',
      },{
        imgUrl:'https://image.meiye.art/FsXpVwbHOoZ-gK19SReypCb1El3D',
        titName:'筑潮时尚地图',
        des:'只要够潮，探寻艺术 “潮” 涌黔城',
      }
    ],
    category: {
      value: 'all',
      options: [
        {
          value: '1',
          label: '#飞盘',
        },
        {
          value: '2',
          label: '#徒步',
        },
        {
          value: '3',
          label: '#羽毛球',
        },
        {
          value: '4',
          label: '#橄榄球',
        },
        {
          value: '5',
          label: '#匹克球',
        },
        {
          value: '6',
          label: '#网球',
        },
        {
          value: '7',
          label: '#跑步',
        },
        {
          value: '8',
          label: '#骑行',
        },
      ],
    },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})