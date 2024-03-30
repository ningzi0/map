const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `https://image.meiye.art/pic_Ne32dVsjirVDADa4Ig3xV`,
  `https://image.meiye.art/pic_IAGmwTI5zWbbsofU1EBwx`,
  `https://image.meiye.art/pic_zTCwyVqKS5tFEuU2WBOjX`,
  `https://image.meiye.art/pic_HazE2fVpsDFI6vmF7aHKh`
];

Component({
  data: {
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    scHeight:'220rpx',
    hidden:false,
    imgList:[
      'https://image.meiye.art/pic_YT3ps7I5PMRYGDRPzrwCl',
      'https://image.meiye.art/pic_k-AfDB4fykk6q3k2fuTHw',
      'https://image.meiye.art/pic_zTCwyVqKS5tFEuU2WBOjX'
    ],
    commentList:[
      {
        Avatar:'https://image.meiye.art/pic_tQfe8Kmjjt_cpoJZoa485',
        name:'tb54275959',
        info:'03.15 19:04 浙江 | 已购票',
        desc:'我说不出话，我说不出话。我热泪盈眶，我只愿看到这条影评的人都能来看。愿我们仰望同一片星空。'
      },{
        Avatar:'https://image.meiye.art/pic_tQfe8Kmjjt_cpoJZoa485',
        name:'tb54275959',
        info:'03.15 19:04 浙江 | 已购票',
        desc:'我说不出话，我说不出话。我热泪盈眶，我只愿看到这条影评的人都能来看。愿我们仰望同一片星空。'
      }
    ]
  },

  methods: {
    openHeight(){
      this.setData({
        scHeight:'auto',
        hidden:true
      })
    },
    closeHeight(){
      this.setData({
        scHeight:'220rpx',
        hidden:false
      })
    }
  },
});
