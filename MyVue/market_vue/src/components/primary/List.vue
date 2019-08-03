<template>
    <div class="list">
      <div class="header">
        <div class="left">
                <!-- <router-link to="/Product"></router-link> -->
            <span @click="back"></span>
        </div>
        <div class="right">
            <div class="search">
                <input type="text" placeholder="请输入商品名称">
                <button></button>
            </div> 
        </div>
      </div>
      <div class="order">
       <ul>
           <li class="salCount">
             <a href="">销量
               <span>
                 <i></i>
                 <i></i>
               </span>
             </a>
           </li>
           <li>
               <a href="">综合</a>
           </li>
           <li class="pepole">
               <a href="">人气
                <i><img src="../../assets/filter.png" alt=""></i>
               </a>
           </li>
           <li class="price">
               <a href="">价格
                 <span>
                  <i></i>
                  <i></i>
                 </span>
               </a>
           </li>
           <li>
               <a href="">筛选</a>
           </li>
       </ul>
      </div>
      <!-- 商品列表 -->
      <div class="proList" v-for="(item,i) of list" :key="i">
        <div class="leftImg">
            <a href="">
              <img :src="'http://127.0.0.1:3000/img/'+item.pic" alt="">
            </a>
        </div>
        <div class="rightTxt">
          <div>
            <!-- （注意：用query传参这里是带查询参数，用path） -->
              <router-link :to="{path:'/details',query:{pid:item.pid}}">{{item.title}}</router-link>
              <!-- <a href="">{{item.title}}</a> -->
          </div>
          <div>￥{{item.price.toFixed(2)}}</div>
          <div>
              <span>月销:{{item.sal}}</span>
              <a href=""><img src="../../assets/buy.png" alt=""></a>
          </div>
        </div>
      </div>
      <mt-button type="default" size="large" style="width:100%; font-size:14px;" @click="loadMore">点击加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
          list:[],
          pno:0,//页码
          ps:5  //页大小
        }
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        },
        loadMore(){ //加载更多数据
          var url="list";
          //将页面+1
           this.pno++;
        //创建参数对象
          var obj={pno:this.pno,pageSize:this.ps};
         // console.log(obj);
          this.axios.get(url,{params:obj}).then(result=>{
            //将第一页追加到第二页
           //  console.log(1);
              var rows=this.list.concat(result.data.data);
            //   console.log(result.data.data);
              this.list=rows;
            //数据覆盖，只留最新数据
          })
        }
    },
    created(){//当组件创建成功
        this.loadMore();
    }
}
</script>
<style scoped>
 p{
    margin:0;
 }
 .header{
    width:100%;
    height: 46px;
    background:#8fb13d;
  }
  .left{
    float: left;
    width:12%; 
    height:100%; 
  }
 .left>span{
     background: url("../../assets/home/arrow_left.png") no-repeat 15px center;
     background-size:auto 16px;
     display: block;
     width:45px;
     height:46px;
     margin:auto;
     margin-right:0;
 }
 .right{
    float:left;
    width:88%; 
    height:100%; 
 }
 .search{
    width:94%;
    height:36px; 
    margin:5px 5% 5px 1%;
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
   .order{
       width:100%;
       height:40px;
       border-top:1px solid #ccc;
       border-bottom:1px solid #ccc;
   }
   .order>ul{
       margin:0;
       padding:0;
       width:100%;
       height:100%;
       display: flex;
       justify-content: space-around;
       align-items: center;
       list-style: none;
   }
  .order>ul>li>a{
      text-decoration: none;
      color:#666;
      font-size:15px;
  }
  .order>ul>li:first-child>a{    
      color:#8fb13d;
  }
  .order>ul>li:first-child>a>span>i:first-child{    
      border-bottom-color:#8fb13d;
  }
  .order>ul>li:last-child>a{ 
      display: inline-block;   
      width:50px;
      height:25px;
      line-height: 25px;
      border:1px solid #ccc;
      border-radius: 3px;
  }
  .salCount>span,.price>span{
      display: block;
  }
  .salCount>a>span,.price>a>span{
      margin-left:3px;
      display: block;
      float: right;
  }
  .salCount>a>span>i:first-child,.price>a>span>i:first-child{
      display:block;
      border-style:solid;
      border-width:5.28px; 
      border-color:transparent;
      border-bottom-color:#666; 
  }
  .salCount>a>span>i:last-child,.price>a>span>i:last-child{
      margin-top:2px;
      display:block;
      border-style:solid;
      border-width: 5.28px; 
      border-color:transparent;
      border-top-color:#666; 
  }
  .pepole>a>i{
      width:100%;
      height:17px
  }
  .pepole>a>i>img{
     width:10px;
     height:15px;
     vertical-align: middle;
  }
  .proList{
    width:100%;
    border-bottom:1px solid #ccc; 
    padding-top:3px; 
    overflow: hidden;
  }
  .proList .leftImg{
     width:30%;
     height:116.5px;
     float: left;
     margin-right:15px;
     overflow: hidden;
  }
  .proList .leftImg>a{
     width:100%;
     height:100%;
  }
  .proList .leftImg>a>img{
      width:100%;
      height:112.5px;
      border-radius: 5px;
  }
  .proList .rightTxt{
     width:65%;
     height:116.5px;
     float: left; 
     overflow: hidden;
  }
   .proList .rightTxt div{
      width:100%;
      text-align: left;
   }
   .proList .rightTxt>div:first-child{
     height:40px;
     margin:8px 0;
   }
   .proList .rightTxt>div:first-child>a{
       text-decoration: none;
       font-size: 14px;
       color:#333;
   }
   .proList .rightTxt>div:nth-child(2){
       font-size: 16px;
       color:#8fb13d;
       font-weight: bold;
   }
    .proList .rightTxt>div:last-child{
       overflow: hidden;
       margin-top:-5px; 
    }
    .proList .rightTxt>div:last-child>span{
       float: left;
       font-size: 13px;
       margin-top:10px;
    }
    .proList .rightTxt>div:last-child>a{
       float: right;
       margin-right:16px;
    }
    .proList .rightTxt>div:last-child>a>img{
      width:24px;
      height:24px;
    }
</style>
