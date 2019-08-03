//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//引入自定义组件
//import Home from './views/Home.vue'
import Home from "./components/Home.vue"
import MiddleBar from "./components/common/MiddleBar.vue"
import Login from "./components/primary/Login.vue"
import Index from "./components/primary/Index.vue"
import Product from "./components/primary/Product.vue"
import Cart from "./components/primary/Cart.vue"
import List from "./components/primary/List.vue"
import Center from "./components/primary/Center.vue"
import Details from "./components/primary/Details.vue"
import Reg from "./components/primary/Reg.vue"

Vue.use(Router)

//4.为组件配置路径
export default new Router({
  routes: [
    { path: '/Home',component: Home},
    { path: '/MiddleBar',component: MiddleBar},
    { path: '/Login',component: Login},
    { path: '/Index',component: Index},
    { path: '/Cart',component: Cart},
    { path: '/Product',component: Product},
    { path: '/List',component: List},
    { path: '/Center',component: Center},
    { path: '/details',component: Details},
    { path: '/Reg',component: Reg},
  ]
})
