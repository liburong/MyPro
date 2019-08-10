// pages/comment/comment.js
//6.1初始化数据库 env环境id
const db = wx.cloud.database({
  env: "web-wx-01-txv96"
})
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     value:"", //输入框中输入的内容
     score:5,   //打分默认5分，满分
     movieid:0, //电影id值
     detail: {},  //保存电影信息
     images:[],  //保存选中的图片
     fileIDS: [],
    // 组件所需的参数
     nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: 'Top250', //导航栏 中间的标题
      background: "#fff",
      color: "#000"
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  mysubmit:function(){
   // 功能1：将选中的图片上传到云存储中
  //1.在data中添加属性fileIDS:[]
  //2.显示加载动画提示框“正在提交中”
    wx.showLoading({
      title: '正在提交中...',
    })
  //3.上传图片到云存储
    //3.1创建promise数组[保存promise对象]
    var promiseArr=[];
    //3.2创建一个循环遍历选中图片
    for(var i=0;i<this.data.images.length;i++){
    //3.3创建promise对象,往数组中添加元素
      //promise负责完成上传一张图片的任务
      //并且将图片的fileID保存到数组中 resolve 解决   reject 拒绝；排斥
      promiseArr.push(new Promise((resolve,reject)=>{
     //3.3.1获取当前图片
       var item=this.data.images[i];
     //3.3.2创建正则表达式拆分文件后缀名(.jpg .png)
       // \转义 .就是.jpg前的.
         // .字母数字下划线结尾的至少一位
       var suffix=/\.\w+$/.exec(item)
     //3.3.3上传图片并且将fileID保存到数组中
      //新文件名=时间+随机数+后缀
       var newFile=new Date().getTime()+Math.floor(Math.random()*9999)+suffix;
       // 3.3.4 上传成功以后获取文件
       wx.cloud.uploadFile({
          //3.3.4为图片创建新的文件名
         cloudPath: newFile, //新文件名
         filePath:item,  //选中文件
         success:res=>{
          //3.3.5上传成功以后要拼接fileID
          var fid=res.fileID;
          // console.log(fid)
         var ids=this.data.fileIDS.concat(fid);
          this.setData({
            fileIDS:ids
          })
          //3.3.6将当前promise任务追加到任务列表中
           resolve(); //函数
         }, 
         fail: err => {  //3.3.7上传失败输出错误消息
           console.log(err); //上传失败
         }
       })
      }));//promise end
    }//for end 
   //功能2：将云存储中的fileID一次性存储到云数据库中
     //4.在云数据库中添加集合mycomment,此集合用于保存评论内容与文件id
     //5.回调函数:等待数组中所有Promise任务执行结束
    Promise.all(promiseArr).then(res=>{
     console.log(res)
     //6.回调函数中
      //6.1在程序最顶端初始化数据库
     //7.将评论内容 分数 电影id 上传图片的所有id添加到集合中
      db.collection("mycomment") //指定集合
      .add({      //添加记录
        data:{  //数据
          content: this.data.value,  //评论的内容
          score: this.data.score,     //评论分数
          movieid:this.data.movieid,   //电影id
          fileIds: this.data.fileIDS   //图片fileID
        }
      })
      .then(res=>{
        //8.隐藏加载提示框
       wx.hideLoading();
     //9.显示提示框“发表成功”
     wx.showToast({
       title: '发表成功',
     })
      }).catch(err=>{
     //10.添加集合失败
     //11.隐藏加载提示框
        wx.hideLoading();
     //显示提示框“评论失败”
        wx.showToast({
          title: '发表失败',
        })
      })
     
     
    })
   
  },
  selectImage: function () {
    //功能：请用户选中9张图片并且保存在data中
    //1.在data中添加数组属性 images
    //2.调用wx.chooseImage选中图片
    wx.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success:(res)=>{
        var files = res.tempFilePaths;
        //3.将选中的9张图片保存到images中
        this.setData({
          images: files
        })
      },
    })

  },
  loadMore(){
    //发送请求，获取云函数返回的数据
   // console.log(123);
   //1.接收电影列表传递的参数id
    var id = this.data.movieid;
    console.log(id);
   //2.显示数据加载提示框
   wx.showLoading({
     title: '加载中...',
   })
   //3.调用云函数
   wx.cloud.callFunction({
     name: "movieDetails2",
     data:{id:id}
   }).then(res=>{
   //4.获取云函数返回的结果
     console.log(res);
     //4.1将云函数返回的字符串转成JS对象
    var obj = JSON.parse(res.result);
     console.log(obj);
     //4.2保存js对象到detail
     this.setData({
       detail: obj
     })
     //4.3隐藏加载提示框  
     wx.hideLoading(); 
   }).catch(err=>{
     console.log(err);
   })
  },

  onScoreChange:function(e){
    //用户打分对应事件处理函数
    //1.获取用户现在输入的分数
   // console.log(e.detail);
   //2.将用户输入新分数赋值操作
   this.setData({
     score:e.detail
   })
  },
  onContentChange: function (e) {
    //用户输入的内容
    //  console.log(e.detail);
    this.setData({
      value:e.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //将电影列表组件传递的参数id保存到data中的movieid
    this.setData({
      movieid:options.id
    });
   // console.log(options);
     this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})