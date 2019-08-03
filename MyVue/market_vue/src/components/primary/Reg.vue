<template>
    <div class="UserReg">
       <div class="header">
            <div>
              <router-link to="/Login"></router-link>
                <!-- <a href=""></a> -->
            </div>
            <div>用户注册</div>    
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
 .header>div:first-child>a{
     background: url("../../assets/home/arrow_left.png") no-repeat 15px center;
     background-size:auto 16px;
     display: block;
     width:45px;
     height:46px;
     margin:auto;
 }
  .header>div:last-child{
      float: left;
      width:70%;
      font-size: 16px;
      color:#fff;
      text-align: center;
      height:46px;
      line-height: 46px;
  }
</style>
