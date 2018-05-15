// pages/index/index.js
Page({
  data: {
    arr_obj:[
      {image:'../../image/image1.jpg', url:'/pages/film/film?id=1', desc:'16集全', text:'Missing 9'},
      {image:'../../image/image2.jpg', url:'/pages/film/film?id=2', desc:'更新到第14集', text:'被告人'},
      {image:'../../image/image3.jpg', url:'/pages/film/film?id=3', desc:'20集全', text:'步步惊心：丽'},
      {image:'../../image/image4.jpg', url:'/pages/film/film?id=4', desc:'更新到第5集', text:'大力女子都奉顺'},
      {image:'../../image/image5.jpg', url:'/pages/film/film?id=5', desc:'16集全', text:'孤单又灿烂的神'},
      {image:'../../image/image6.jpg', url:'/pages/film/film?id=6', desc:'6集全', text:'积极的体质'},
      {image:'../../image/image7.jpg', url:'/pages/film/film?id=7', desc:'更新到第14集', text:'金科长'},
      {image:'../../image/image8.jpg', url:'/pages/film/film?id=8', desc:'16集全', text:'举重妖精金福珠'},
      {image:'../../image/image9.jpg', url:'/pages/film/film?id=9', desc:'全16集完', text:'来自星星的你'},
      {image:'../../image/image10.jpg', url:'/pages/film/film?id=10', desc:'20集全', text:'浪漫医生金师傅'},
      {image:'../../image/image11.jpg', url:'/pages/film/film?id=11', desc:'16集全', text:'奶酪陷阱'},
      {image:'../../image/image12.jpg', url:'/pages/film/film?id=12', desc:'更新到第14集', text:'内向的老板'},
      {image:'../../image/image13.jpg', url:'/pages/film/film?id=13', desc:'更新到第2集', text:'你太过分了'},
      {image:'../../image/image14.jpg', url:'/pages/film/film?id=14', desc:'20集全', text:'请回答1988'},
      {image:'../../image/image15.jpg', url:'/pages/film/film?id=15', desc:'20集全', text:'任意依恋'},
      {image:'../../image/image16.jpg', url:'/pages/film/film?id=16', desc:'18集全', text:'云画的月光'},
    ]
  },
  onLoad: function(options) {
    console.log("onLoad...");
  },
  onReady: function() {
    console.log('onReady...');
  },
  onShow: function() {
    console.log("onShow...");
  },
  onHide: function() {
    console.log("onHide...");
  },
  onUnload: function() {
    console.log("onUnload...");
  },
  onPullDownRefresh: function() {
    //wx.stopPullDownRefresh(false);
  },
  onReachBottom: function() {
    console.log("onReachBottom...");
  },
  onShareAppMessage: function () {
    return {
      title: '分享给好友',
      path: '/page/index/index'
    }
  },
  // Event handler.
  GoToDetail: function(event){
    wx.navigateTo({
      url: event.target.dataset.url
    })
  },
  customData: {
    hi: 'MINA'
  }
})