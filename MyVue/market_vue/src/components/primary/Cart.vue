<template>
  <div class="cart">
    <!-- 头部 -->
       <div class="header">
          <div class="left">
            <span @click="back"></span>
          </div>
          <div class="middle">购物车</div>    
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
             <router-link :to="item.path">
               <span class="imgs">
                   <img :src="item.pics" alt="">
                </span>
               <span>{{item.title}}</span>
             </router-link>
            </li>
        </ul>
      </div>
    <!-- 中间类别 -->
    <ul class="kind" >
        <li v-for="(elem,index) of kindlist" :key="index" v-bind:class="{'colorChange':index==current}" @click="changeColor(index)">
            <router-link to="/Cart">{{elem}}</router-link>
            
        </li>
    </ul>
    <!-- 选中产品信息 -->
    <ul class="selected" v-for="(p,i) of list" :key="i">
        <li>
            <input type="checkbox" v-model="p.cb"  @click="radios(i)">
        </li>
        <li>
            <a href="">
               <img :src="'http://127.0.0.1:3000/img/'+p.img_url" alt="">
            </a>
        </li>
        <li class="detail">
           <p>
               <a href="">{{p.title}}</a>
           </p> 
           <p>{{p.subtitle}}</p> 
           <p class="count">
             <span>￥{{p.price.toFixed(2)}}元</span>
             <span @click="desc(i)">-</span>
             <input type="text" v-model="p.count">
             <span @click="incr(i)">+</span>
           </p> 
           <button @click="delItem" :data-id="p.id">删除</button>
        </li>
    </ul>
    <!-- 底部 -->
    <div class="footer">
        <div class="selectAll">
          <input type="checkbox" @change="selectAll">全选
        </div>
        <button @click="delAll">删除选中</button> 
        <span>合计:</span>
        <span style="color:red;">￥{{price}}</span>
        <span style="color:red;">元</span>
        <a href="">去结算</a>
    </div>
 </div>
</template>
<script>
// import store from "../../store"

export default {
    data(){
        return{
            phone:'',
            user:'',
        
          //默认总数量
            count:0,
          //默认总价
            price:0,
            list:[],
            list2:[
               {pics:require('../../assets/shouye.png'),title:"首页",path:"/Home"},
               {pics:require('../../assets/fenlei.png'),title:"分类",path:"/Product"},
               {pics:require('../../assets/gouwuche.png'),title:"购物车",path:"/Cart"},
               {pics:require('../../assets/wode.png'),title:"我的",path:"/Login"}
            ],
            isActive:false,
            kindlist:["现货","生鲜","预定","预售"],
            current:0
        }
    },
    created(){
        this.getStorage()
        this.loadMore();
    },
    methods:{
      getStorage(){
        this.user=localStorage.getItem('user')
        if(!this.user){  // 如果缓存中没有此用户，路由导向 登陆页
          this.$router.push({path:'/Login'})
        }
        else{
          //初始化加载   显示总价总数量
            var money=0;
            var num=0;
            var list=this.list;
           for(var i=0;i<list.length;i++){
              if(list[i].cb){
                money+=list[i].count*list[i].price;
                num+=list[i].count
              }
            }
            this.price=money;
            this.count=num;
          }
      },
      toggle(){
           this.isActive=!this.isActive;
       },
      changeColor(index){
    //点击添加背景颜色，其他的删除class名称
        this.current=index;
       },
       back(){
         this.$router.push("/Home")      
       },
       allMoney(){
          var money=0;
          var num=0;
          var list=this.list;
          for(var i=0;i<list.length;i++){
            if(list[i].cb){
              money+=list[i].count*list[i].price;
              num+=list[i].count
            }
          }
          this.price=money;
          this.count=num;
       },
       radios(i){
         var list=this.list;
         list[i].cb=!list[i].cb
          this.allMoney();
       },
       desc(i){
        var list=this.list;
        var count = list[i].count;
        if(count > 1) {
							count = count - 1;
							list[i].count = count;
            }
            this.allMoney();
       },
       incr(i){
         var list=this.list;
         var count = list[i].count;
						count = count + 1;
         list[i].count = count;
         this.allMoney();
       },
       delAll(){
        //删除多个商品
        //1.创建变量保存空字符串
         var str=""; 
        //2.创建循环拼接字符串内容 
        //每选中一个要删除的商品，就把id拼接到str中
        for(var item of this.list){
          if(item.cb){
              str+=item.id+","
          }
        }
        //1,6,
        str=str.substring(0,str.length-1)//截取从0~6
        if(str.length==0){
          this.$toast("请选中商品")
          return;
        }
        var url="delAll";
        var obj={ids:str};
        this.axios.get(url,{params:obj}).then(result=>{
            this.loadMore();
        })
       },
       delItem(e){
        var id=e.target.dataset.id;
      //  console.log(id);
        this.$messagebox.confirm("是否删除当前商品").then(action=>{
            var url="delItem";
            var obj={id:id};
            this.axios.get(url,{params:obj})
                .then(result=>{
            //重新加载数据相当于无刷新效果删除商品
                  this.loadMore();
                });
         }).catch(err=>{
             return;
         })
       },
       selectAll(e){
        //全选按钮状态
           var cb=e.target.checked;
        //   console.log(cb)
         //依据状态修改列表cb
           for(var p of this.list){
               p.cb=cb;
               this.allMoney();
           }
       },
       loadMore(){
        //清空之前的，无刷新删除
        this.$store.commit("clear")
        // this.$store.commit("clear")
        var url="cart";
        this.axios.get(url).then(result=>{
          //  console.log(result);
           // console.log(result.data.data);
         //2.创建循环为数组中每个对象添加cb属性，cb控制商品前复选框
           var rows=result.data.data;
           for(var p of rows){
          //2.1:添加cb属性
            p.cb=false;
          //2.2:更新购物车数量
             this.$store.commit("increment");
           }
          //3.将新数据保存
          this.list=rows;
     })
    }  
  }
}
</script>
<style scoped>
.cart{
  overflow: auto;
  padding-bottom: 50px;

}
 .header{
    width:100%;
    height: 46px;
    background:#8fb13d;
  }
  .header>div:first-child{
    float: left;
    width:15%; 
    height:100%; 
  }
 .header>div:first-child>span{
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
      color:#fff;
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
    margin-top: -20px;
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
.kind{
    width:98%;
    margin:0 1%;
    border-bottom: 1px solid #8fb13d;
    height:38px;
    padding:10px 0px;
}
.kind>li{
    width:25%;
    height:38px;
    list-style: none;
    float: left;
    text-align: center;
    line-height: 38px;
}
.kind>li>a{
    width:100%;
    height:100%;
    text-decoration: none;
    font-size: 14px;
    color:#000;
    background:transparent; 
}
.colorChange{
    background: #8fb13d;
    color:#000;
}
.selected{
   width:100%;
   height:130px;
   background: #fff4e8;
   border-bottom: 1px dotted #8fb13d;
   list-style: none;
   padding: 0;
   margin: 0;
   display: flex;
   flex-direction: row ;
   flex-wrap: nowrap;
   justify-content: flex-start; 
}
.selected>li:not(:last-child){
    display: flex;
    flex-direction: row ;
    flex-wrap: nowrap;
    justify-content: flex-start; 
    margin-left:5%;
    height:100%;
    align-items: center;
}
.selected>li:first-child{
    width:4.2%;
    margin-left:0;
}
.selected>li:first-child>input{
     width:100%;
     vertical-align: middle;
}
.selected>li:nth-child(2){
    width:18%;
}
.selected>li:nth-child(2)>a{
    float: left;
    margin-right: 8px;
}
.selected>li:nth-child(2)>a>img{
    width:100%;
    height:70px;
    vertical-align: middle;
}
.selected>li:nth-child(3){
     width:60%;
     height:100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start ;
     padding-left:16px;
}
.selected>.detail>p:nth-child(3){
     width:100%;
}
p{ margin: 0;}
li.detail>p:nth-child(1){
   margin-top:5px;
}
li.detail>p:nth-child(1)>a{
   font-size: 14px;
   color:#000;
   text-decoration: none; 
}
li.detail>p:nth-child(2){
   font-size: 13px;
   color:#666;
   margin-top:8px;
}
p.count{
   margin:10px 0 5px 0;
   width:100%;
   height:26px;
   line-height: bottom;
   overflow: hidden;
}
.count>span:first-child{
   color: red;
   float: left;
   margin-right:15px;
  font-size: 16px;
}
.count>span:nth-child(2),.count>span:nth-child(4){
   width:9%;
   height:24px;
   border: 1px solid #ccc;
   font-size: 26px;
   color:#888;
   text-align: center;
   line-height: 24px;
   float: left;
}

.count>input{
  width:20%;
  height:24px;
  border:0;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  padding:0;
  float: left;
  text-align: center;
  font-size: 16px;
  color:#777;
}
.detail>button{
    border:0px;
    background:transparent;
    color:#888;
    font-size: 14px;
    margin-left:145px;
}
.footer{
    position: fixed;
    bottom: 0px;
    width:100%;
    height:40px;
    padding:10px 0;
    line-height: 40px;
    background: #f8f8f8;
    
}
.footer>div{
  float: left;
  height: 100%;
  width:45px;
  padding-left:6px;
  margin-right:8px;
  font-size: 14px;
}
.footer>div>input{
  height: 17px;
  width: 17px;
  vertical-align: middle;
}
.footer>button{
  border:0;
  background: transparent;
  font-size:12px; 
  color:#888;
  margin:0px 65px 0px 5px;
  float: left;
  overflow: hidden;
  height: 100%;
}
.footer>span{
  height: 100%;
  float: left;
  font-size: 15px;
  color:#888;
}
.footer>a{
    float: right;
    text-decoration: none;
    width:42px;
    height: 100%;
    background: #8fb13d;
    padding:0 10px;
    margin-right:15px;
    color:#000;
    font-size: 14px;
}
</style>
