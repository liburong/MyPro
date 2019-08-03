<template>
  <div class="details">
       <div class="header">
          <div class="left">
            <span @click="back"></span>
          </div>
          <div class="middle">商品详情</div>
           <div class="right">
            <div @click="toggle"><img src="../../assets/nav.png" alt=""></div>
          </div>     
       </div>
        <!-- 隐藏导航条 -->
      <div class="goods_nav" v-show="isActive">
        <div class="triangle">
           <p></p>                 
        </div> 
        <ul class="navBar">
            <li v-for="(item,i) of list2" :key="i">
             <router-link  :to="item.path">
               <span class="imgs">
                   <img :src="item.pics" alt="">
                </span>
               <span>{{item.title}}</span>
             </router-link>
            </li>
        </ul>
      </div>
       <div class="carousel">
      <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="(elem,i) of banner" :key="i">
                    <img :src="'http://127.0.0.1:3000/img/'+elem.pic" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
      </div>
      <div v-for="(item,i) of details" :key="i">
        <div class="title">{{item.title}}</div>
        <div class="proDetail">
            <h2 class="price">￥{{item.price.toFixed(2)}}元</h2>
            <p class="detail">{{item.detail}}</p>  
            <p class="spec">规格：{{item.spec}}</p>
            <div class="sum">
                   <a href="">
                     <div>1-5件</div>
                     <div>￥573.00</div>
                    </a> 
                   <a href="">
                       <div>5-10件</div>
                       <div>￥556.00</div>
                    </a> 
                    <a href="">
                       <div>10-20件</div>
                       <div>￥545.00</div>
                    </a>
                    <a href="">
                       <div>20-件</div>
                       <div>￥528.00</div>
                    </a>
            </div>
            <p class="notice">信息：保质期: 12,储存方式: 冷冻，预订到货周期: 7天</p>
            <div class="number">
                <div class="jian">
                    <span>件</span>
                    <span>5片</span>
                </div> 
                <div class="count">
                  <div>
                     <span>+</span>
                     <input type="text" value="1" v-model="item.count">
                     <span>-</span> 
                  </div>
                </div> 
            </div>
            <div class="logo">
               <a>
                 <img src="../../assets/dongyang.jpg" alt=""> 
               </a>
               <span>松洋</span>
            </div> 
        </div>
      </div>
      <div class="footer">
        <div>
           <router-link to="/Home">
                <img src="../../assets/home/shouye.png" alt="">
                <p>首页</p> 
           </router-link> 
            <a>客服</a>  
            <a>
                <img src="../../assets/shoucang.png" alt="">
                <p>收藏</p> 
            </a>
        </div>
        <div>
            <router-link :to="where" :style="{background:color}">{{text}}</router-link>
            <!-- <a href="" :style="{background:color}">{{text}}</a> -->
            <a href="" v-show="!info">立即购买</a>
        </div>
      </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            text:"",
            info:true,
            where:"",
            color:"",
             list2:[
               {pics:require('../../assets/shouye.png'),title:"首页",path:"/Home"},
               {pics:require('../../assets/fenlei.png'),title:"分类",path:"/Product"},
               {pics:require('../../assets/gouwuche.png'),title:"购物车",path:"/Cart"},
               {pics:require('../../assets/wode.png'),title:"我的",path:"/Login"}
            ],
            isActive:false,
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
              }
            },
            banner:[],
            details:[]
       }
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        },
         toggle(){
           this.isActive=!this.isActive;
       },
        getStorage(){
            this.user=localStorage.getItem('user')
            if(!this.user){  // 如果缓存中没有此用户，路由导向 登陆页
             this.text="请登录",
             this.info=true,
             this.color="red"
             this.where="/Login"
            //  this.$router.push({path:'/Login'})
            }else{ 
               this.text="加入购物车"
               this.info=false
            //  this.phone=JSON.parse(this.user).user
             // 否则，界面显示 当前用户名称
            }
        },
    },
    created(){
      var pid=this.$route.query.pid;
        // console.log(pid);
        var url="details";
        this.axios.get(url+"?pid="+pid,null).then(result=>{
        //  console.log(result);
            this.banner=result.data.banner;
            this.details=result.data.details;
          // console.log( this.banner);
        })

      this.getStorage()
    }
    
}
</script>
<style scoped>
.details{
    overflow: auto;
    padding-bottom: 60px;
}
.header{
    width:100%;
    height: 46px;
    background:#eee;
    position: fixed;
    z-index: 999; 
  }
  .left{
    float: left;
    width:15%; 
    height:100%;  
  }
 .left>span{
     background: url("../../assets/home/arrow_left.png") no-repeat 15px center;
     background-size:auto 16px;
     display: block;
     width:45px;
     height:46px;
     margin:auto;
 }
 .header>div:nth-child(2){
      float: left;
      width:70%;
      font-size: 16px;
      color:#f00;
      text-align: center;
      height:46px;
      line-height: 46px;
  }
   .right{
      float: left;
      width:15%;
      height:46px;
  }
  .right>div{
      width:85%;
      margin-right:15%;
      height: 100%;
      display: flex;
      align-items: center;
  } 
  .goods_nav{
    width:30%;
    float: right;
    right:5px;
    overflow: hidden;
    position: fixed;
    margin-top:20px;
    z-index: 999;
}
.goods_nav .triangle{
    width:100%;
    height:20px;
}
.triangle>p{
    border-style:solid;
    border-color: transparent transparent #666 transparent;
    border-width: 10px;
    float: right;
    margin:0 10px 0 0;
    overflow: hidden;  
}
.navBar{
    margin:0;
    padding:0;
    list-style: none;
    width:100%;
    background:rgba(46,45,45,0.9); 
    overflow: hidden;
    border-radius: 4px;  
}
.navBar>li{
    width:100%;
    height:40px;
    border-bottom: 1px solid #999;
}
.navBar>li>a{
    width:100%;
    height:40px;
    text-decoration: none;
    color: #eee;
    font-size: 14px;
    display: flex;
    align-items: center;
}
.imgs{
    float: left;
    margin:0px  5px ;
}
.imgs>img{
    width:20px;height:20px;
}
.navBar>li>a>span:nth-child(2){
    float: left;
    height:31px;
    line-height: 31px;
}
  .carousel{
      width:100%;
      height:350px;
  }
  .swiper-slide>img{
     width:100% !important;
     height:375px !important;
  }
  .title{
     clear: both;
     width:100%;
     height:30px;
     background:#eee;  
     padding:15px 0px;
     margin-top: 20px;
     line-height: 30px;
     font-size: 15px;
     color:#000;
  }
.proDetail{
   width:93%;
   margin:0 3%;
}
.price,.detail,.spec,.notice{
   text-align: left;
}
.price,.detail{
    color:#64a131;
}
.price{
    margin:8px 0;
    text-align: left;
}
.detail{
    font-weight: bold;
    line-height: 20px;
}
.spec,.notice{
    color:#888;
    margin:5px 0px;
}
.notice{
    clear: both;
    margin:0px;
}
.sum{
   width:100%;
   margin: 10px 0px;
   overflow: hidden;
}
.sum>a{
    float: left;
    margin:2px 5px 2px 0px;
    padding: 4px 5px;
    background: #ff9c00;
    font-size: 12px;
    text-decoration: none;   
}
.sum>a>div:first-child{
    color:#fff;
}
.sum>a>div:last-child{
    margin-top:5px;
    color:#ff9c00;
    background: #fff;
    height:20px;
}
.number{
    width: 100%;
    height:28px;
    padding:15px 0px ;
    margin:15px 0px ;
    border-top:1px dotted #eee; 
    border-bottom:1px dotted #eee; 
}
.number .jian{
    float: left;
    width:30%;
}
.jian>span:first-child{
    float: left;
    width:30px;  
    height: 28px;
    text-align: center;
    background: #64a131;
    font-size: 12px ;
    color:#fff;
    line-height: 28px;
    margin-right:5px;
}
.jian>span:last-child{
    float:left;
    width:35px;  
    height: 26px;
    text-align: center;
    font-size: 12px ;
    color:#999;
    line-height: 26px;
    border:1px solid #DFDFDF;
}
.number .count{
    width:70%;
    float: right;
}
.count>div{
    width:100%;
}
.count>div>span{
   width:12%;
   height:26px;
   border: 1px solid #ccc;
   background: #f2f2f2;
   font-size: 26px;
   color:#888;
   text-align: center;
   line-height: 26px;
   float: right;
}
.count>div>input{
  width:25%;
  height:26px;
  border:0;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  padding:0;
  float: right;
  text-align: center;
  font-size: 16px;
  color:#777;
}
.logo>a{
    float: left;
    width:80px;
    height:60px;
    padding:3px;
    margin-right: 10px;
    border:1px solid #eee; 
}
.logo>a>img{
    width:100%;
    height:100%;
}
.logo>span{
    float: left;
    font-size: 14px;
    color:#999;
}
.footer{
    position: fixed;
    bottom: 0px;
    width:100%;
    height:50px;
    line-height: 50px;
    background: #f8f8f8; 
    display: flex;
}
.footer>div>a{
  text-decoration: none;
}
.footer>div:first-child{
    width:40%;
    height:100%;
    display: flex;
}
.footer>div:first-child>a{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:33%;
    height:50px;
    padding-top:5px;
    color:#666;
}
p{
    margin:0;
}
.footer>div:first-child>a:not(:last-child){
    border-right: 1px solid #eee;
}
.footer>div:first-child>a>img{
    width:23;
    height:23px;
}
.footer>div:first-child>a>p{
    height:20px;
    line-height:20px;
    margin-top:2px;
    font-size: 13px;
}
.footer>div:first-child>a:nth-child(2){
    line-height:69px;
    font-size: 13px;
}
.footer>div:last-child{
    width:60%;
    display: flex;
}
.footer>div:last-child>a{
    float: left;
    width:50%;
    height:50px;
    line-height: 50px;
    text-align: center;
    font-size:18px;
    color:#fff;
}
.footer>div:last-child>a:first-child{
    background: #ff9c00; 
}
.footer>div:last-child>a:last-child{
    background: #dd2726;
}

</style>
