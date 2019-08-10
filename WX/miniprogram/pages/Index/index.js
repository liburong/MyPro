// pages/Index/index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //3.保存数据
   list:[],
// 组件所需的参数
    nvabarData: {
    showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
    title: '影院热映', //导航栏 中间的标题
    background:"#2aac5e",
    color:"#fff"
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
  },
  loadMore:function(){
  // console.log(123)
  //1.调用云函数movielist
   wx.cloud.callFunction({
     name: "movielist", //函数名
     data:{
       start: this.data.list.length,
       count:10
     } //参数
   }).then(res=>{
  // console.log(res)
   //将字符串转成js对象
    var obj=JSON.parse(res.result);
    // console.log(obj)
    //保存电影列表subjects
    //功能：保存上一页电影列表
   //1.保存电影列表数据
     var rows = obj.subjects;
     for (var i = 0; i < rows.length; i++) {
       rows[i].images.small = rows[i].images.small.replace(/^http/, "https")
     }
      
   //2.将电影列表数组拼接操作
     rows=this.data.list.concat(rows);
   //3.将拼接后结果保存起来
    this.setData({
      list: rows
    });
    // console.log(obj.subjects)

   }).catch(err=>{
     console.log(err) 
   })
  //2.将返回的结果保存在list
  },
//点击详情跳转详情组件comment
  jumpComment:function(e){
    //保留并且跳转，允许回退
   var id=e.target.dataset.id //获取自定义的属性
   wx.navigateTo({
     url: '/pages/comment/comment?id='+id,
   });

  },
  
  onLoad: function (options) {
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
   console.log(123);
   //发送请求下载下一页数据
   this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})