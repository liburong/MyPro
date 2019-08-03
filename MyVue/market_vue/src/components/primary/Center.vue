<template>
  <div class="myCenter" >
    <div class="header">
       <div>
          <span>{{phone}}</span>
           <a href="">设置</a>
        </div>
        <div>
           <img src="../../assets/user68.jpg" alt="">
        </div> 
    </div>
    <div class="myInfo">
       <ul>
           <li>
            <a href="">
                <span>0</span>
                我的订单
            </a>
           </li>
           <li>
            <a href="">
                <span>0</span>
                我的收藏
            </a>
           </li>
           <li>
            <a href="">
                <span>0</span>
                我的评价
            </a>
           </li>
       </ul> 
    </div>
    <div class="thirdPart">
       <ul >
           <li>
            <a href="">
                <span>￥0元</span>
                余额
            </a>
           </li>
           <li>
            <a href="">
                <span>0</span>
               优惠券
            </a>
           </li>
           <li>
            <a href="" @click="removeStorage">退出登录</a>
            <!-- <router-link to="/Login">退出登录</router-link> -->
           </li>
       </ul> 
    </div>
    <div class="fourthPart" >
      <div>
          <a href="">
            <em class="icon1"></em>
            <span>到货提醒</span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon2"></em>
            <span>
               <span>我的订单</span> 
               <span>查看订单</span> 
            </span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon3"></em>
            <span>我的预售</span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon4"></em>
             <span>
               <span>我的特价</span> 
               <span></span> 
            </span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon5"></em>
             <span>
               <span>我的收藏</span> 
               <span></span> 
            </span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon6"></em>
             <span>
               <span>我的余额</span> 
               <span>查看我的余额</span> 
            </span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon7"></em>
             <span>
               <span>我的账单</span> 
               <span></span> 
            </span>
          </a>
      </div>
      <div>
          <a href="">
           <em class="icon8"></em>
             <span>
               <span>地址管理</span> 
               <span></span> 
            </span>
          </a>
      </div>
       <div>
          <a href="">
           <em class="icon9"></em>
             <span>
               <span>售后服务</span> 
               <span></span> 
            </span>
          </a>
      </div>
    </div>
    <div class="footer">
      <p>© 2017 天宇食品商城</p>
      <p>四川天宇诚业供应链管理有限公司</p>
    </div>
                 <!-- 底部导航条 -->
      <mt-tabbar v-model="active" fixed class="tabBar">
      <mt-tab-item id="index" @click.native="changeState(0);btn('Home')">
        <tabbaricon 
         :selectedImage="require('../../assets/home/shouye1.png')"
         :normalImage="require('../../assets/home/shouye.png')"
         :focused="currentIndex[0].isSelect"
        ></tabbaricon> 
        首页
        
      </mt-tab-item>

      <mt-tab-item  id="list" @click.native="changeState(1);btn('Product')">
    
          <tabbaricon
          :selectedImage="require('../../assets/home/fenlei1.png')"
          :normalImage="require('../../assets/home/fenlei.png')"
          :focused="currentIndex[1].isSelect"
          ></tabbaricon>
          分类
       
      </mt-tab-item>

      <mt-tab-item  id="buy" @click.native="changeState(2);btn('Cart')">
       
          <tabbaricon
          :selectedImage="require('../../assets/home/gouwuche1.png')"
          :normalImage="require('../../assets/home/gouwuche.png')"
          :focused="currentIndex[2].isSelect"
          ></tabbaricon>
          购物车
       
      </mt-tab-item>
      <mt-tab-item  id="me" @click.native="changeState(3);btn('Login')">
       
          <tabbaricon
          :selectedImage="require('../../assets/home/me1.png')"
          :normalImage="require('../../assets/home/me.png')"
          :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        
      </mt-tab-item>
    </mt-tabbar>  
  </div>

</template>
<script>
import TabBarIcon from "../common/TabBarIcon.vue"
// import store from "../../store"

export default {
    data(){
        return{
            phone:'',
            user:'',
           active:"me",
          currentIndex:[
          {isSelect:false},
          {isSelect:false},
          {isSelect:false},
          {isSelect:true}
        ] 
        }
    },
    methods:{
        getStorage(){
            this.user=localStorage.getItem('user')
            if(!this.user){  // 如果缓存中没有此用户，路由导向 登陆页
            this.$router.push({path:'/Login'})
            }else{ 
             this.phone=JSON.parse(this.user).user
             // 否则，界面显示 当前用户名称
            }
        },
         removeStorage(){
            this.$store.commit('_removeStorage','user') // 如果点击 退出，清除缓存 路由导向其他页面
            this.$router.push({path:'/Login'})
        },
       
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
      },
    },
    components:{//注册子组件，起标签名
      "tabbaricon":TabBarIcon
    },
    created(){
        this.getStorage()
    }
 }        
</script>
<style scoped>

.myCenter{
     overflow: auto;
     padding-bottom: 50px;
}
.myCenter .header{
    width:100%;
    height:130px;
    background: url("../../assets/userbg.png") no-repeat center bottom;
    background-size: 100%;
}
.myCenter .header>div:first-child{
    width:60%;
    float: right;
    overflow: hidden;
    height:50px;
    line-height: 50px;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.myCenter .header>div:first-child>span{
    width:65%;
    font-size: 15px;
    color:#fff;
}
.myCenter .header>div:first-child>a{
    width:22%;
    margin-right:5%;
    height:30px;
    border:1px solid #fff;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color:#fff;
    border-radius: 4px;
    text-decoration: none;
}
.myCenter .header>div:last-child{
    width:100%;
}
.myCenter .header>div:last-child>img{
    margin:65px 0px 0px -80px;
    width:60px;
    height: 60px;
    border-radius: 50%;
}
.myCenter .myInfo{
    width:100%;
    height:60px;
    border-bottom:1px solid #ddd;
    border-radius: 8px;
}
.myCenter .myInfo>ul{
    margin:0;
    padding:0;
    width:70%;
    height:40px;
    padding-top:10px;
    float: right;
    list-style: none;
    display: flex;
}
.myCenter .myInfo>ul>li{
    width:33%;
    height:40px;
    border-right:1px solid #eee;
}
.myCenter .myInfo>ul>li:last-child{
    border-right:0;
}
.myCenter .myInfo>ul>li>a{
    display: block;
    width:100%;
    height:40px;
    line-height: 20px;
    text-decoration: none;
    font-size: 12px;
    color:#000;
}
.myCenter .myInfo>ul>li>a>span{
    display: block;
    width:100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color:#666;
}
.myCenter .thirdPart{
    width:100%;
    height:60px;
    border-bottom:1px solid #ddd;
    border-radius: 8px;
}
.myCenter .thirdPart>ul{
    margin:0;
    padding:0;
    width:100%;
    height:40px;
    padding-top:10px;
    float: right;
    list-style: none;
    display: flex;
}
.myCenter .thirdPart>ul>li{
    width:33%;
    height:40px;
    border-right:1px solid #eee;
}
.myCenter .thirdPart>ul>li:last-child{
    border-right:0;
}
.myCenter .thirdPart>ul>li>a{
    display: block;
    width:100%;
    height:40px;
    line-height: 20px;
    text-decoration: none;
    font-size: 12px;
     color:#666;
}
.myCenter .thirdPart>ul>li>a>span{
    display: block;
    width:100%;
    height: 20px;
    line-height: 20px;
}
.myCenter .thirdPart>ul>li:first-child>a>span,.thirdPart>ul>li:nth-child(2)>a>span{
    color:red;
}
.myCenter .thirdPart>ul>li:last-child>a{
    line-height: 40px;
    font-size: 14px;
    color:#000;
}
.myCenter .fourthPart{
    width:100%;
    border-bottom:1px solid #ddd;
    position: relative;
}
.myCenter .fourthPart>div{
    width:100%;
    height:45px;
}
.myCenter .fourthPart>div>a{
    width:100%;
    height:45px;
    text-decoration: none;
    float: left;
    line-height: 45px;
    margin-left:10px;
    font-size: 16px;
    color:#666;
}
.myCenter .fourthPart>div>a>em{
   background: url("../../assets/user.png") no-repeat;
   background-size: auto 1700%;
   display: block;
   float: left;
   width:35px;
   height: 35px;
   margin-top:5px;
   position: absolute;
}
.myCenter .fourthPart>div>a>.icon1{
    background-position: 0px -291px;
}
.myCenter .fourthPart>div>a>.icon2{
    background-position: 0px -80px;
}
.myCenter .fourthPart>div>a>.icon3{
    background-position: 0px -37.5px;
}
.myCenter .fourthPart>div>a>.icon4{
    background-position: 0px -123px;
}
.myCenter .fourthPart>div>a>.icon5{
    background-position: 0px 3px;
    background: url("../../assets/user1.png") no-repeat;
    background-size: auto 930%;
}
.myCenter .fourthPart>div>a>.icon7{
    background-position: 0px -37.5px;
}
.myCenter .fourthPart>div>a>.icon8{
    background-position: 0px -249.9px;
}
.myCenter .fourthPart>div>a>.icon9{
    background-position: 0px -463px;
}
.myCenter .fourthPart>div>a>span{
    display: inline-block;
    width:100%;
    margin-left:35px;
    border-bottom: 1px solid #eee;
    text-align: start;
}
.myCenter .fourthPart>div>a>span>span:first-child{
    width:50%;
    float: left;
}
.myCenter .fourthPart>div>a>span>span:last-child{
    height:45px;
    line-height: 45px;
    width:30%;
    margin-right:10%;
    float: right;
    text-align:center;
    font-size: 12px;
    color:#aaa;
    background: url("../../assets/arrow_right.png") no-repeat;
    background-size: auto 12px;
    background-position: 85% center;
    padding-right:10px;
}
.myCenter .fourthPart>div:last-child>a>span{
      border-bottom: 1px solid #ddd;
}
.myCenter .footer{
    width:100%;
    height:40px;
    padding: 10px 0px;
    text-align: center;
    background: #f8f8f8;
}
p{
   margin:0; 
  color:#aaa;
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
