<template>
  <div>
          <!-- 底部导航条 -->
    <mt-tabbar v-model="active" fixed class="tabBar">
      <mt-tab-item id="index" @click.native="changeState(0);btn('Home')">
        <!-- <router-link to="/Index"> -->
        <tabbaricon 
         :selectedImage="require('../../assets/home/shouye1.png')"
         :normalImage="require('../../assets/home/shouye.png')"
         :focused="currentIndex[0].isSelect"
        ></tabbaricon> 
        首页
        <!-- </router-link> -->
      </mt-tab-item>

      <mt-tab-item  id="list" @click.native="changeState(1);btn('Product')">
       <!-- <router-link to="/Product"> -->
          <tabbaricon
          :selectedImage="require('../../assets/home/fenlei1.png')"
          :normalImage="require('../../assets/home/fenlei.png')"
          :focused="currentIndex[1].isSelect"
          ></tabbaricon>
          分类
        <!-- </router-link> -->
      </mt-tab-item>

      <mt-tab-item  id="buy" @click.native="changeState(2);btn('Cart')">
        <!-- <router-link to="/Cart">  -->
          <tabbaricon
          :selectedImage="require('../../assets/home/gouwuche1.png')"
          :normalImage="require('../../assets/home/gouwuche.png')"
          :focused="currentIndex[2].isSelect"
          ></tabbaricon>
          购物车
        <!-- </router-link> -->
      </mt-tab-item>
      <mt-tab-item  id="me" @click.native="changeState(3);btn('Login')">
        <!-- <router-link to="/login"> -->
          <tabbaricon
          :selectedImage="require('../../assets/home/me1.png')"
          :normalImage="require('../../assets/home/me.png')"
          :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        <!-- </router-link> -->
        <!-- <a href="http://127.0.0.1:8081/#/Login">
        
        </a> -->
      </mt-tab-item>

      </mt-tabbar>  
  </div>
</template>
<script>
//引入导航条子组件
import TabBarIcon from "../common/TabBarIcon.vue"

export default {
    data(){
        return{}
    },
    components:{//注册子组件，起标签名
      "tabbaricon":TabBarIcon
    }
}
</script>
<style>

</style>

