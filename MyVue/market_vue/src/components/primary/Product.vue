<template>
<div class="myProduct">
  <div class="product">
     <div class="header">
       <div class="left">
            <router-link to="/Home"></router-link>
         <!-- <a href="" ></a> -->
       </div>
       <div class="right">
          <div class="search">
             <input type="text" placeholder="请输入商品名称">
             <button></button>
          </div> 
       </div>
     </div>
     <div class="container">
      <div class="partLeft">
          <ul>
              <li>特产食品</li>
              <li>肉类食品</li>
              <li>海鲜制品</li>
              <li>熟食制品</li>
              <li>生鲜果蔬</li>
          </ul>
      </div>
      <div class="partRight">
          <ul>
              <li>
                <router-link to="/List">进入特产频道&nbsp;></router-link>
                <!-- <a href="">进入特产频道&nbsp;></a> -->
              </li>
              <li>
                <a href="">生花生</a>
              </li>
              <li>
                <a href="">羊肚菌</a>
              </li>
              <li>
                <a href="">明参</a>
              </li>
              <li>
                <a href="">其他特产</a>
              </li>
          </ul>
      </div>
     </div>
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
</div>
</template>
<script>
//引入导航条子组件
import TabBarIcon from "../common/TabBarIcon.vue"

export default {
    data(){
        return{
            id:'',
            active:"list",
            currentIndex:[
            {isSelect:false},
            {isSelect:true},
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
    created(){
      this.id=this.$route.query.id
    },     
    components:{//注册子组件，起标签名
      "tabbaricon":TabBarIcon
    }
}
</script>
<style scoped>
/* .myProduct{
   overflow: hidden;
} */
/* .product{
   overflow: auto;
} */
 ul,li,p{
   margin:0;
   padding:0;
 }
 .header{
    width:100%;
    height: 46px;
    background:#8fb13d;
    margin-bottom:0px;
  }
  .left{
    float: left;
    width:15%; 
    height:100%; 
  }
 .left>a{
     background: url("../../assets/home/arrow_left.png") no-repeat 15px center;
     background-size:auto 16px;
     display: block;
     width:45px;
     height:46px;
     margin:auto;
 }
 .right{
    float:left;
    width:85%; 
    height:100%; 
 }
 .search{
    width:94%;
    height:36px; 
    margin:5px 4% 5px 2%;
    border-radius: 18px;
    background: #fff;
    position: relative;
 }
 .search>input{
    width:85%;
    height:34px;
    line-height: 34px;
    border: 0;
    padding: 0;
    font-size:13px;
    outline: none;
    background: #fff;
    margin:1px 0;
 }
 .search>button{
     border: 0;
     width:19.2px;
     height:19.2px;
     background: url("../../assets/ico.png") no-repeat 50% 50%;
     background-size: 19.2px 19.2px;
     padding:0px;
     position: absolute;
     top:8px;
     right:11.2px;
 }
 .container{
     width:100%;
     margin: 0 auto;
     height:660px;
 }
 .partLeft{
     height:100%;
     width:25%;
     float: left;
     overflow: hidden;
     background: #fff;
 }
 .partLeft>ul{
     list-style: none;
     width:100%;
 }
 .partLeft>ul>li{
     width:100%;
     height: 50px;
     line-height: 50px;
     border-top: 1px solid #f4f4f4;
     font-size: 14px;
     color:#999;
     font-family: arial;
     text-align: center;
 }
 .partLeft>ul>li:first-child{
     color:#8fb13d;
     border-left: 3px solid #8fb13d;
     background: #f5f5f5;
 }
 .partRight{
     height:100%;
     width:75%;
     float: left;
     overflow: hidden;
     background: #f5f5f5;
 }
 .partRight>ul{
     width:95%;
     margin: auto;
     list-style: none;
 }
 .partRight>ul>li{
     width:100%;
     height: 50px;
     line-height: 50px;
     text-align: left;    
 }
 .partRight>ul>li:not(:first-child)>a{
    text-decoration: none;
     font-size: 14px;
     color:#777;
     font-family: arial;
 }
 .partRight>ul>li:first-child>a{
      display: inline-block;
      width:100%;
      height:35px;
      margin:10px 0;
      background: #8fb13d;
      text-decoration: none;
      text-align: center;
      font-size: 13px;
      color:#fff;
      line-height: 35px;
      border-radius: 3px;
 }

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
