<template>
    <div class="brand">
     <div class="title">
        <span></span>
        <span>品牌墙</span>
        <a href="javascript:;">更多</a>
     </div>
     <ul class="branList">
         <li v-for="(item,i) of list" :key="i">
            <a href="javascript:;"><img :src="item.pic_url"></a>
            <div>{{item.title}}</div>
         </li>
     </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
            {pic_url:require('../../assets/home/b1.jpg'),title:"天宇"},
            {pic_url:require('../../assets/home/b2.jpg'),title:"蒸烩煮"},
            {pic_url:require('../../assets/home/b3.jpg'),title:"大成"},
            {pic_url:require('../../assets/home/b4.jpg'),title:"佳盈"},
            {pic_url:require('../../assets/home/b5.jpg'),title:"泰森"},
            {pic_url:require('../../assets/home/b6.jpg'),title:"正大"},
            {pic_url:require('../../assets/home/b7.jpg'),title:"蓝威"},
            {pic_url:require('../../assets/home/b8.jpg'),title:"元盛"}
            ]
        }
    }
}
</script>
<style scoped>
   .brand{
       width:100%;
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
       text-decoration: none;
       color:#777;
       font-size: 12px;
       margin-right:10px;
   }
   .brand>.branList{
       width:98%;
       margin:0 1%;
       list-style: none;
       overflow: hidden;
       padding:0px;
   }
   .branList>li{
       float: left;
       width:20%;
       margin:0 2.5% 12px;
       text-align: center;
       vertical-align: middle;
   }
   .branList>li>a{
       display: block;
       width:100%;
   }
    .branList>li>a>img{
        width:100%;
    }
  .branList>li>div{
    font-size: 12px;
    color:#777;
    height:20px;
  }
</style>
