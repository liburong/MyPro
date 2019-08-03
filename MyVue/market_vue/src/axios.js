//将axios库单独保存在一个文件中(原本该放在main.js中)
//减少main.js代码量
//1.引入vue实例
import Vue from "vue"
//2.引入axios库
import axios from 'axios'
//3.配置axios发送给ajax请求时保存session信息
axios.defaults.withCredentials=true
//4.配置axios基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//5.将axios注册vue实例
Vue.prototype.axios=axios
//6.在main.js引入axios.js文件


