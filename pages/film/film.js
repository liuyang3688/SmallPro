Page({
  data:{
    hide : true
  },
  onLoad:function(options){
    var list = [
      {},
      {image: '../../image/image-detail1.jpg',title:'Missing 9',direct:'崔秉吉',writer:'孙黄元',actors:'郑京浩 / 白珍熙 / 朴灿烈 / 李善彬 / 金相浩',type:'剧情',lang:'韩语',debut:'2017-01-18(韩国)',series:'16',link:'http://www.acfun.cn/a/aa5015436',desc:'《打架吧鬼神》是韩国tvN有线台于2016年7月11日起播出的月火连续剧，由李大日编剧，朴俊和执导，玉泽演、金所炫、权律、金尚浩等联合主演。'},
      {image: '../../image/image-detail2.jpg',title:'被告人',direct:'赵荣光',writer:'崔秀珍 / 崔昌焕',actors:'吴彰锡 / 金玟锡 / 池晟 / 严基俊',type:'剧情',lang:'韩语',debut:'2017-01-23(韩国)',series:'18',link:'http://www.acfun.cn/a/aa5015493',desc:'《被告人》围绕着一个强力检察官成为死囚逃脱罪名的故事而展开，讲述了故事的主人公是一个未认证过被告人有罪的大韩民国最佳强力检察官，一系列的突发事件是他沦为被关在监狱看守所里的人。而更为糟糕的是他在一系列事件发生之后记忆全部暂时丧失，这为他洗刷冤屈增添了不少的难度。他也进入人生最糟糕的两难选择，开始陷入检察官的迫切殊死的斗争中。'},
	  {image: '../../image/image-detail3.jpg',title:'步步惊心：丽',direct:'金奎泰',writer:'赵允英 / 桐华',actors:'李准基 / 姜河那 / 李知恩 / 洪宗玄 / 南柱赫',type:'剧情',lang:'韩语',debut:'2016-08-29(韩国)',series:'20',link:'http://v.youku.com/v_show/id_XMTcwNDMyMjIwNA==.html',desc:'《月亮的恋人》韩国SBS于2016年初播出的水木迷你连续剧，由金奎泰执导，改编自2011年中国电视剧《步步惊心》。韩国版将把清朝换成韩国的历史背景，并在古装剧的基础上加入现代元素。'},
	  {image: '../../image/image-detail4.jpg',title:'大力女子都奉顺',direct:'李亨民',writer:'白美琼',actors:'朴宝英 / 朴炯植 / 金志洙 / 安宇延',type:'剧情',lang:'韩语',debut:'2017-02-24(韩国)',series:'16',link:'http://www.acfun.cn/v/ac3500695 ',desc:'此剧讲述一个怪力女子都奉顺和一个独一无二的男子相爱并发生横冲直撞的浪漫爱情喜剧故事。是一部幻想、喜剧和动作结合的有趣故事，都奉顺拥有谁都超越不了的怪力，被她打了至少需要62周才能痊愈。'},
	  {image: '../../image/image-detail5.jpg',title:'孤单又灿烂的神',direct:'李应福',writer:'金银淑',actors:'孔侑 / 金高银 / 李栋旭 / 刘仁娜 / 陆星材',type:'剧情',lang:'韩语',debut:'2016-12-02(韩国)',series:'16',link:'http://www.acfun.cn/a/aa5014753',desc:'拥有不死之身的“鬼怪”金侁（孔侑 饰），为了结束自己无限循环的生活必需找到一位人类新娘，却在寻找途中阴差阳错与患有失忆症的阴间使者王黎（李东旭 饰）开始了奇妙“同居”生活，两人在遇到了传说中的“鬼怪的新娘”——一个“命中注定要死”的少女池恩倬（金高银 饰）之后，逐渐展开浪漫故事。'},
	  {image: '../../image/image-detail6.jpg',title:'积极的体质',direct:'李炳宪',writer:'',actors:'都暻秀 / 蔡书珍 / 李大为',type:'剧情 / 爱情',lang:'韩语',debut:'2016-10-31(韩国)',series:'6',link:'http://www.acfun.cn/a/aa5014467',desc:'主人公焕东(音译 D.O.饰演)是一位准备制作电影的电影专业的大学生,与以前的恋人慧晶(音译 蔡书珍饰演)再次相遇后展开了一段故事.焕东为了实现自己的导演梦,和工作人员们一起克服了经费涉外准备等一系列不平凡的事情。'},
	  {image: '../../image/image-detail7.jpg',title:'金科长',direct:'李杰勋',writer:'朴宰范',actors:'南宫珉 / 南相美 / 李俊昊 / 郑彗星 / 金元海',type:'剧情',lang:'韩语',debut:'2017-01-25(韩国)',series:'16',link:'http://www.acfun.cn/v/ac3432847',desc:'该剧讲述了会计师金成龙任职某公司担任科长，为坚持原则不惜与他人抗争的故事。'},
	  {image: '../../image/image-detail8.jpg',title:'举重妖精金福珠',direct:'吴贤锤',writer:'杨熙胜',actors:'李圣经 / 南柱赫 / 庆收真 / 李载允 / 刘多仁',type:'剧情',lang:'韩语',debut:'2016-11-16(韩国)',series:'16',link:'http://www.acfun.cn/a/aa5014515',desc:'年方21岁的体育大学举重部学生金福珠（李圣经饰）是一个努力向着梦想和目标奔跑的女孩，虽然看起来非常轻率，但却有一颗柔软的玻璃心。在机缘巧合之下，她遇到同校游泳部的男同学郑俊亨（南柱赫饰），一个不太走运的游泳天才，由此展开一段充满罗曼蒂克的初恋故事。'},
	  {image: '../../image/image-detail9.jpg',title:'来自星星的你',direct:'张太维',writer:'朴智恩',actors:'金秀贤 / 全智贤 / 朴海镇 / 刘仁娜 / 吴尚镇',type:'爱情',lang:'韩语',debut:'2013-12-18(韩国)',series:'21',link:'http://www.iqiyi.com/v_19rrlc78kw.html?vfm=2008_aldbd',desc:'敏俊与颇受人诟病的国民偶像千颂伊（全智贤 饰）比邻而居，而且后者又是他所在大学的学生。最初的交流并不顺畅，但敏俊很快发现这个女孩和他竟有着如此深的渊源。 '},
	  {image: '../../image/image-detail10.jpg',title:'浪漫医生金师傅',direct:'刘仁值',writer:'姜银庆',actors:'柳演锡 / 韩石圭 / 徐贤真 / 金弘波 / 林元熙',type:'剧情',lang:'韩语',debut:'2016-11-07(韩国)',series:'20',link:'http://www.acfun.cn/v/ac3309689',desc:'《浪漫医生金实福》讲述了想要赢任何人的男医生姜东柱和想要从别人那里获得认可的女医生尹书真的爱情故事而展开。本是毫无联系的两人在遇见了怪才医生金实福之后，领悟到真正的人生价值和爱情的人性爱情…… '},
	  {image: '../../image/image-detail11.jpg',title:'奶酪陷阱',direct:'李允贞',writer:'金南熙 / 高善熙',actors:'朴海镇 / 金高银 / 徐康俊 / 南柱赫 / 李圣经',type:'喜剧 / 爱情',lang:'韩语',debut:'2016-01-04(韩国)',series:'16',link:'http://v.youku.com/v_show/id_XMTU3Mzc4NDA1Mg==.html',desc:'外貌俊朗、成绩优秀的高富帅学长刘正（朴海镇饰），温和的外表下却隐藏着不为人知的一面，唯一能够看穿刘正心思的平凡女大学生洪雪（金高银饰）与刘正稀里糊涂地交往，两人之间的爱情、矛盾和各种浪漫而颇具神秘色彩的校园故事。 '},
	  {image: '../../image/image-detail12.jpg',title:'内向的老板',direct:'宋贤旭',writer:'朱华美',actors:'延宇振/朴慧秀 / 尹博 / 孔升妍 / 艺智苑',type:'喜剧 / 爱情',lang:'韩语',debut:'2017-01-16(韩国)',series:'16',link:'http://www.acfun.cn/a/aa5015400',desc:'《内向的老板》描述了极度害羞的男人在遇上了活泼开朗的女人之后，发生的浪漫搞笑故事。剧中延宇振将饰演公司CEO殷焕基，一个认为备受人们关注比死还讨厌的男人，他性格极度内向，像幽灵一般披着神秘的面纱，因此失去了一切。朴慧秀则饰演剧中活力满满的新进职员蔡露云。'},
	  {image: '../../image/image-detail13.jpg',title:'你太过分了',direct:'白浩民',writer:'河清玉',actors:'严正化 / 具惠善',type:'剧情',lang:'韩语',debut:'2017-03-04(韩国)',series:'50',link:'http://www.acfun.cn/a/aa5016036',desc:'讲述的是明星歌手刘智娜（严正化 饰）与模仿歌手郑海棠（具惠善 饰）之间爱憎怜悯、错综复杂的人生故事。'},
	  {image: '../../image/image-detail14.jpg',title:'请回答1988',direct:'申源浩',writer:'李有静',actors:'成东日 / 李日花 / 罗美兰 / 金成钧 / 崔武成',type:'剧情 / 喜剧 / 爱情',lang:'韩语',debut:'2015-11-06(韩国)',series:'20',link:'http://www.iqiyi.com/v_19rrlkh3ag.html',desc:'《请回答1988》为韩国tvN自2015年10月30日起播出的金土连续剧，由《请回答1997》、《请回答1994》制作班底申元浩导演和李祐汀作家再度携手合作。此剧与以往将初恋作为重心的另两部同系列作品不同，将以家族关系和邻里感情作为剧情主轴。而且1988年也是香港电影的巅峰时期，张国荣、周润发等影星在韩国皆具有高知名度，因此也可能被列为剧情素材之一。'},
	  {image: '../../image/image-detail15.jpg',title:'任意依恋',direct:'朴铉锡',writer:'李庆熙',actors:'金宇彬 / 裴秀智 / 林周焕 / 林珠恩 / 刘五性',type:'爱情',lang:'韩语',debut:'2016-07-06(韩国)',series:'20',link:'http://v.youku.com/v_show/id_XMTYzMDg5ODU4MA==.html',desc:'讲述年少时期因为令人伤痛的恶缘而分离的两个男女，在长大后以目中无人的超级甲方topstar和卑躬屈膝又势力的超级乙方纪录片导演再次相遇后刻薄又凄美的爱情故事。'},
	  {image: '../../image/image-detail16.jpg',title:'云画的月光',direct:'金善允',writer:'金敏贞 / 林艺珍 / 尹怡素',actors:'朴宝剑 / 金裕贞 / 千虎珍 / 蔡秀彬 / 郑真英',type:'剧情 / 爱情 / 古装',lang:'韩语',debut:'2016-08-22(韩国)',series:'18',link:'http://www.mgtv.com/b/295071/3374218.html',desc:'洪乐瑥（金裕贞 饰）女扮男装化名洪三郎，靠着替人撰写情书牵线搭桥维持生计。某日，一个偶然的失误令洪乐瑥惹上了一大堆的麻烦，不仅欠下巨额债务，还身处于危险之中，与此同时，洪乐瑥结识了名为李韺（朴宝剑 饰）的书生，话不投机的两人之间因为种种误会而产生了诸多矛盾。 '},
	];
    this.setData({
      film:list[options.id]
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  btnLinkTap:function(event){
    this.setData({
      linkaddr: event.target.dataset.link,
      hide : !this.data.hide
    });
  }
})