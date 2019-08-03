<template>
 <div class="page-wrap">
    <!-- 顶部导航条 -->
    <div class="titleBar">
     <a href="javascript:;">
       <img src="../../assets/home/fenlei4.png" alt="">
     </a>
     <span>天宇食品商城</span>
     <a href="" class="rightImg">
       <img  src="../../assets/home/gouwuche3.png" alt="">
     </a>
    </div>
   <!-- 轮播图1 -->
    <div class="carousel">
      <!-- swiper -->
      <swiper :options="swiperOption">
         <swiper-slide v-for="(item,i) of listBanner1" :key="i">
            <img :src="'http://127.0.0.1:3000/img/'+item.pic" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 搜索框 -->
    <searchInput :imgurl="require('../../assets/home/icosousuo.png')"></searchInput>
    <!-- 中间分类导航 -->
    <middleBar></middleBar>
    <!-- 分割线 -->
    <div class="middleLine"></div>
    <!--品牌墙 -->
    <brandWall></brandWall>
    <!-- 分割线 -->
    <div class="middleLine line2"></div>
     <!-- 轮播图2 -->
    <div class="countSal">
      <div class="title">
          <span></span>
          <span>特价抢购</span>
          <a href="javascript:;">
            <img src="../../assets/home/jiantou1.png" alt="">
          </a>
      </div>
      <div class="carousel2">
        <!-- swiper -->
        <swiper :options="swiperOption1">
         <swiper-slide v-for="(item1,i) of  listBanner2" :key="i">
          <a href="" class="proSal">
            <img :src="'http://127.0.0.1:3000/img/'+item1.pic" alt="" > 
            <div>{{item1.title}}</div>
            <p>￥{{item1.price.toFixed(2)}}</p>
          </a>
         </swiper-slide>
        <div class="swiper-pagination1" slot="pagination"></div>
      </swiper>
     </div>
    </div>
    <div class="hot">
      <div class="week">————&nbsp;本周热卖&nbsp;————</div>
      <!-- 热卖产品 -->
      <div class="sal">
      <ul class="proList">
        <li v-for="(elem,i) of listProduct" :key="i">
          <a href="">
            <img :src="'http://127.0.0.1:3000/img/'+elem.pic" alt="">
            <div>{{elem.title}}</div>
            <p>￥{{elem.price.toFixed(2)}}</p>
          </a>
        </li>
      </ul>
      </div>
    </div>
</div>
</template>
<script>
//引入轮播图子组件
//引入搜索框子组件
import SearchInput from "../common/SearchInput.vue"
// 引入中间分类导航子组件
import MiddleBar from "../common/MiddleBar.vue"
//引入品牌墙子组件
import BrandWall from "../common/BrandWall.vue"
//引入导航条子组件
// import TabBarIcon from "../common/TabBarIcon.vue"
// //引入登录组件
// import Login from "../primary/Login.vue"
// //引入购物车组件
// import Cart from "../primary/Cart.vue"
export default {
    data(){
         return {
            active:"index",
            currentIndex:[
            {isSelect:true},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false}
            ],
            listProduct:[],
            listBanner1:[],
            listBanner2:[],
            swiperOption:{
              slidesPerView:1,
              spaceBetween:30,
              autoplay:{
                delay: 2500,
                disableOnInteraction: false
              },
              pagination: {
                 el: '.swiper-pagination',
                 clickable:true
              },
            },
            swiperOption1: {
               slidesPerView: 3,
               spaceBetween: 30,
               autoplay:{
                 delay: 2500,
                 disableOnInteraction: false
               },
               pagination: {
                  el: '.swiper-pagination1',
                 clickable: true
               }
            }
          }
      },
    methods:{
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
      var url="index";
      this.axios.get(url).then(result=>{
      //  console.log(result);
      this.listBanner1=result.data.banner1;
      this.listBanner2=result.data.banner2;
      this.listProduct=result.data.product;
      //   console.log(this.listBanner1);
      }).catch(err=>{
        console.log(err);
      })
    },
    components:{//注册子组件，起标签名
      "searchInput":SearchInput,
      "middleBar":MiddleBar,
      "brandWall":BrandWall,
      // "tabbaricon":TabBarIcon,
      // "login":Login,
      // "cart":Cart
    }
}
</script>
<style scoped>
 .titleBar{
   display: flex;
   height:45px;
   justify-content: space-between;
   align-items:center;
   background: #8FB13D;
   position:fixed;
   top:0;
   z-index:999;
   width:100%; 
 }
 .titleBar>a>img{
    width:28px;
    height:28px;
 }
 .titleBar>a:nth-child(1)>img{
    margin-left:15px;
 }
 .titleBar>.rightImg{
    margin-right:15px;
 }
 .titleBar>span{
   color:#fff;
   font-size: 14px !important; 
   }
   /* 轮播图1 */
    .swiper-slide>img{
     width:100% !important;
   }
   .carousel{
    width:100%;
    margin-top:45px
   }
  .middleLine{
    width:100%;
    height:10px;
    background: #f0f0f0;
    margin-top:10px;
  }
  .line2{
    margin-top:0;
  }
  .countSal{
    width:100%;
    overflow: hidden;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
   .title{
       width:100%;
       height:35px;
       font-size: 14px;
       color:#777;
       line-height: 35px;
   }
   .title>span:nth-child(1){
       float: left;
       width:3px;
       height:15px;
       background:#8fb13d;
       margin-top:10px;
   }
   .title>span:nth-child(2){
       float: left;
       margin-left:5px;
   }
  .title>a{
       float: right;
       height:35px;
       text-decoration: none;
       color:#777;
       font-size: 12px;
       margin-right:10px;
   }
  .title>a>img{
    vertical-align: middle;
  }
  .carousel2{
    width:100%;
    margin-top:5px;
   }
  .proSal{
    display:inline-block;
    width:94px;
    text-decoration: none;
  }
   .proSal>img{
     width:94px;
   }
   .proSal div{
     font-size: 12px;
     color:#777;
     text-align: center;
   }
   .proSal p{
     font-size: 14px;
     color:red;
     margin:5px 0;
   }
  .week{
    height: 50px;
    line-height: 50px;
    color:#999;
  } 
  .hot{
     width:100%;
     background:#f0f0f0; 
  }
  .sal{
    width:98%;
    margin:0 1%;
  }
  .proList{
    display: flex;
    width:100%;
    list-style: none;
    overflow: hidden;
    padding:0px;
    margin:auto;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .proList>li{
    width:49%;
    /* float: left; */
    margin-bottom:5px;
    background: #fff;
  }
  .proList>li>a{
    width:100%;
    margin:auto;
    text-decoration: none;
  }
   .proList>li>a>img{
    width:100%;
    height:165px;
   }
  .proList>li>a>div{
    font-size: 14px;
    color:#666;
    width:93%;
    height: 33px;
    margin:auto;
  }
  .proList>li>a>p{
    width:100%;
    margin:10px auto;
    font-size: 16px;
    color:red;
    border-top:1px solid #eee;
    padding-top:5px;
  }
.page-wrap{
    /* 溢出显示滚动条 */
    overflow: auto;  
    /*给底部导航条留的高度 */
    padding-bottom: 53px;
}
 /* 修改tabbar默认文字颜色 */
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
