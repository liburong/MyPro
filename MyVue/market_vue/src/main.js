import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  VueAwesomeSwiper from 'vue-awesome-swiper'
// import BScroll from './better-scroll'
//以上三行不要动保存原来位置
//原因：引入有序
//第三方组件库在下面引入
//1：完整引入mint-ui
import MintUI from 'mint-ui'
//2:单引引入mint-ui样式
import'mint-ui/lib/style.css'
//3:将mint-ui注册vue
Vue.use(MintUI);
//完整引入element-ui
import ElementUI from 'element-ui';
//2:单引引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
//3:将element-ui注册vue
Vue.use(ElementUI);
//使用swiper
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
//引入移动端适配插件
import 'lib-flexible'
//引入验证码插件

//4.引入图标字体样式文件
//import "./font/iconfont.css"
//5.引入axios.js文件
import axios from "./axios"
//6.引入vuex
import Vuex from "vuex"
//7.注册vuex组件
Vue.use(Vuex)
//8.创建Vuex实例对象：store
const key="user"

var store=new Vuex.Store({
  //vuex中全局共享的数据,要存的初始数据 
//state => 存储初始化的 所存 变量 或 数组
state: {
  user:null,
  cartCount:0,
  //设置属性
  isLogin:false,
 },
//通过mutations修改vuex中全局共享的数据
 //设置属性状态  
  //mutation => 改变数据状态，对数据的修改，封装为方法、函数，存入 mutation
 mutations:{
  //设置数据进入localStorage
   _setStorage(state,value){
     state.user=value
     localStorage.setItem(key,JSON.stringify(value))
     //localStorage.setItem(key,数据值)设置存入缓存
   },
   _removeStorage(state){
     state.user=null
     localStorage.removeItem(key) //删除缓存
   },
  clear(state){
    state.cartCount = 0;
  },
//购物车数量+1
   increment(state){
      state.cartCount++;
   },
//购物车数量增加指定值
  updateCount(state){
   state.cartCount+=c;
  }
 },
//获取vuex中全局共享的数据
 //获取数据
//getter => 读取数据 通过传入 state.xxx 对方法、函数获取
getters:{
  //获取登录状态
  getStorage(state){
    if(!state.user){
      state.user=JSON.parse(localStorage.getItem(key))//获取缓存中的数据
    }
    return state.user
  },
  getCartCount:function(state){
   return state.cartCount;
 }
},
//应用mutations
actions: {

}
})
    //vuex中全局共享的数据 
  // state:{cartCount:0},
  // //修改vuex中全局共享的数据
  //   mutations:{
  //     clear(state){
  //       state.cartCount = 0;
  //     },
  //   //购物车数量+1
  //     increment(state){
  //       state.cartCount++;
  //     },
  //   //购物车数量增加指定值
  //     updateCount(state){
  //       state.cartCount+=c;
  //     }
  //   },
  // //获取vuex中全局共享的数据
  //   getters:{
  //     getCartCount:function(state){
  //       return state.cartCount;
  //     }
  //   }

// //验证登录
// router.beforeEach((to,from,next)=>{
//   //获取用户登录成功后存储的登录标志
//   let getFlag=localStorage.getItem("Flag");
//   //如果登录标志存在且为isLogin,即用户已登录
//   if(getFlag==="isLogin"){
//     //设置vuex登录状态为已登录
//     store.state.isLogin=true
//     next()
//     //如果已登录，还想进入登录注册界面，则定向会首页
//     if(!to.meta.isLogin){
//      //友好提示
//     //  iView.Message.error('请先退出登录')
//      next({
//        path:'/Center'
//      })
//     }
//   }else{
//     //如果登录标志不存在，即未登录
//     //用户想进入需要登录的页面，则定向回登录界面
//     if(to.meta.isLogin){
//      next({
//        path:'Login'
//      })
//     }else{//进入无需登录的界面，则跳转继续
//       next()
//     }
//   }
// });
//9.将store保存在vue实例中
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
