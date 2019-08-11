//1.引入第三方ajax库
var rp = require("request-promise");
//2.创建main函数async:异步
exports.main=async(event,context)=>{
  //3.创建变量url 请求地址
  var url = `https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`;
//4.请求rp函数发送请求并且将返回的电影列表返回给调用者
  return rp(url) //发送请求
  .then(res=>{
    return res
  }).catch(err=>{
    console.log(err)
  })
}












// 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }