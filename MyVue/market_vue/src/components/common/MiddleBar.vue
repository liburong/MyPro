<template>
    <div class="entry-list">
      <div class="icons">
        <img src="../../assets/home/aws001.jpg" alt="">
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div class="text">
          <a href="">分类</a>
          <a href="">食谱</a>
          <a href="">品牌墙</a>
          <a href="">尝鲜</a>
          <a href="">食材库</a>
       </div>
      <div class="icons">
        <img src="../../assets/home/aws002.jpg" alt="">
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
         </div>
       </div>
      <div class="text">
          <a href="">活动</a>
          <a href="">收藏夹</a>
          <a href="">品鉴会</a>
          <a href="">优惠券</a>
          <a href="">我的</a>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
   .entry-list{
       width:100%;
       overflow: hidden;
      
   }
   .entry-list>.icons{
       width:94%;
       margin:0px 3%;
       position: relative;
   }
   .entry-list>.icons>img{
      width:100%;
      vertical-align: middle;
      margin-top:10px;
    }
   .entry-list>.icons>div{
     position: absolute;
     top:0px;
     left:0px;
     width:100%;
     height:100%;
   }
  .entry-list>.icons>div>a{
     float: left;
     width:16%;
     margin:0px 2%;
     height:100%;
  }
  .entry-list>.text{
     width:94%;
     margin:0px 3%;
     height:24px;
  }
  .entry-list>.text>a{
     text-decoration: none;
     font-size:12px;
     color:#777;
     float: left;
     width:16%;
     height:24px;
     margin:0px 2%;
     line-height: 24px;
  }
</style>
