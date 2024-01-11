// components/gridList/gridList.js
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';
const firstGrid = [
  {
    label: '微信',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/wechat.png',
  },
  {
    label: '朋友圈',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/times.png',
  },
  {
    label: 'QQ',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/qq.png',
  },
  {
    label: '企业微信',
    image: 'https://tdesign.gtimg.com/miniprogram/logo/wecom.png',
  },
  {
    label: '收藏',
    icon: 'star',
  },
  {
    label: '刷新',
    icon: 'refresh',
  },
  {
    label: '下载',
    icon: 'download',
  },
  {
    label: '复制',
    icon: 'queue',
  },
];
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activityData:[
      {
        "imgSrc":"https://image.meiye.art/pic_1697956071123" ,
        "infoTitle":"活动标题文字",
        "infoDes":"这里是活动内容介绍文字",
        "hidden":true,
       },{
         "imgSrc":"https://image.meiye.art/pic_1697955956400" ,
         "infoTitle":"活动标题文字",
         "infoDes":"这里是活动内容介绍文字",
         "hidden":true,
        },{
         "imgSrc":"https://image.meiye.art/pic_16979558977335" ,
         "infoTitle":"活动标题文字",
         "infoDes":"这里是活动内容介绍文字",
         "hidden":true,
        },{
         "imgSrc":"https://image.meiye.art/pic_1697891883611" ,
         "infoTitle":"活动标题文字",
         "infoDes":"这里是活动内容介绍文字",
         "hidden":true,
        },{
          "imgSrc":"https://image.meiye.art/pic_16979558977335" ,
          "infoTitle":"活动标题文字",
          "infoDes":"这里是活动内容介绍文字",
          "hidden":true,
         },{
          "imgSrc":"https://image.meiye.art/pic_1697891883611" ,
          "infoTitle":"活动标题文字",
          "infoDes":"这里是活动内容介绍文字",
          "hidden":true,
         },{
          "imgSrc":"https://image.meiye.art/pic_16979558977335" ,
          "infoTitle":"活动标题文字",
          "infoDes":"这里是活动内容介绍文字",
          "hidden":true,
         },{
          "imgSrc":"https://image.meiye.art/pic_1697891883611" ,
          "infoTitle":"活动标题文字",
          "infoDes":"这里是活动内容介绍文字",
          "hidden":true,
         }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid,
      });
    },handleSelected(e) {
      console.log(e.detail);
    },
    navigateTo(){
      wx.navigateTo({
        url: '',
      })
    },
      bindlongtap(e){
      let index = e.currentTarget.dataset.index
      const hidden = "activityData[" + index + "].hidden"
      const boole = this.data.activityData[index].hidden;
      this.setData({
        [hidden]:!boole
      })
      
    },
  }
})