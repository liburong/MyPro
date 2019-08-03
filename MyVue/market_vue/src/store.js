import Vue from 'vue'
import Vuex from 'vuex'

//Vuex 存数据，读数据
Vue.use(Vuex)
const key="user"
const store=new Vuex.Store({
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
 export default store