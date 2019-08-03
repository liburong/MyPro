<template>
    <div class="search">
        <input type="text" v-model="searchValue" placeholder="请输入您所搜索的商品">
        <span>
            <img :src="imgurl" alt="">
        </span>
    </div>
</template>
<script>
export default {
    props:{
        imgurl:{default:""}
    },
    data(){
        return{
           searchValue:"",
        }
    }
}
</script>
<style scoped>
.search{
    width:80%;
    margin:15px auto  0px;
    height:40px;
    position: relative;
    left:0;
}
.search>span{
    display:block;
    width:40px;
    height:36px;
    border-left: 1px solid #ccc;
    position: absolute;
    top:0px;
    right:5px;
}
.search>span>img{
    width:30px;
    height:30px;
    margin:0 auto;
    margin-top: 4px;
}
.search>input{
    display:block;
    width:99%;
    height:33px;
    border:1px solid #ccc;
    border-radius: 5px;
    /* 首行文本缩进 */
    text-indent: 10px; 
}
input::placeholder{
     font-size: 14px;
     color:#999;
}
</style>
