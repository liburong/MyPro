// // 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init();
//功能:发送ajax请求获取电影详情内容
//1.引入第三方库 request-promise
var rp=require("request-promise");
//2.创建main函数 event接收参数  
exports.main=async(event,context)=>{
  //3.向电影接口发送请求
  var url = `https://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
  //4.返回带着电影详情内容
  return rp(url)
  .then(res=>{
   return res;
  }).catch(err=>{
    return err;
  })
}



















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