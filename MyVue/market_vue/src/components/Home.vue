<template>
 <div class="index_container">
   <div class="page-wrap">
        <index></index>
    <!-- 底部导航条 -->
    <mt-tabbar v-model="active" fixed class="tabBar">
      <mt-tab-item id="index" @click.native="changeState(0);btn('Home')">
        <tabbaricon 
         :selectedImage="require('../assets/home/shouye1.png')"
         :normalImage="require('../assets/home/shouye.png')"
         :focused="currentIndex[0].isSelect"
        ></tabbaricon> 
        首页
       
      </mt-tab-item>

      <mt-tab-item  id="list" @click.native="changeState(1);btn('Product')">
          <tabbaricon
          :selectedImage="require('../assets/home/fenlei1.png')"
          :normalImage="require('../assets/home/fenlei.png')"
          :focused="currentIndex[1].isSelect"
          ></tabbaricon>
          分类
       
      </mt-tab-item>

      <mt-tab-item  id="buy" @click.native="changeState(2);btn('Cart')">
      
          <tabbaricon
          :selectedImage="require('../assets/home/gouwuche1.png')"
          :normalImage="require('../assets/home/gouwuche.png')"
          :focused="currentIndex[2].isSelect"
          ></tabbaricon>
          购物车
     
      </mt-tab-item>
      <mt-tab-item  id="me" @click.native="changeState(3);btn('Login')">
     
          <tabbaricon
          :selectedImage="require('../assets/home/me1.png')"
          :normalImage="require('../assets/home/me.png')"
          :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
       
      </mt-tab-item>

    </mt-tabbar>
  </div>
 </div>
</template>
<script>
//引入导航条子组件
import TabBarIcon from "./common/TabBarIcon.vue"
//引入首页组件
import Index from "./primary/Index.vue"
// //引入登录组件
// import Login from "./primary/Login.vue"
// //引入购物车组件
// import Cart from "./primary/Cart.vue"
// //引入分类组件
// import Product from "./primary/Product.vue"
// //引入个人中心组件
// import Center from "./primary/Center.vue"
export default {
    data(){
        return{ 
          active:"index",
          currentIndex:[
            {isSelect:true},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false}
          ]
        }
    },
    methods:{
      btn(val){
        this.$router.push('/'+val)
      },
      changeState(n){
        for(var i=0;i<this.currentIndex.length;i++){
          if(n==i){
               this.currentIndex[i].isSelect=true;
          }else{
            this.currentIndex[i].isSelect=false;
          }
          
        }
      }
    },
    components:{//注册子组件，起标签名
      "tabbaricon":TabBarIcon,
       "index":Index,
      // "login":Login,
      // "cart":Cart,
      // "product":Product,
      // "center":Center
    }
}
</script>
<style scoped>
/* 1.最外层父元素 */
.index_container{
  overflow: hidden;
}
.page-wrap{
    /* 溢出显示滚动条 */
    overflow: auto;  
    /*给底部导航条留的高度 */
    /* padding-bottom: 53px; */
}
 /* 修改tabbar默认文字颜色 */
  /* .mint-tab-item-label>a{
   color:#999;
   text-decoration: none;
 }
 a.is-selected{
   color:#45c018;
   background: transparent;
 }  */
 .mint-tabbar>.mint-tab-item{
   color:#999;
 }  
/* 修改tabbar选中文字颜色 */
.mint-tabbar>.mint-tab-item.is-selected{
   color:#45c018;
   background: transparent;
 }
 .tabBar{
   background: #eee;
 }

</style>
