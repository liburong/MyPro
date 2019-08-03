<template>
  <div>
    <div class="login_container"  v-show="info">
      <div class="header">
        <div>
          <router-link to="/Home"></router-link>
          <!-- <a href=""></a> -->
        </div>
        <div>会员登录</div>
      </div>
      <div class="middle">
        <form>
          <div class="login">
            <div>
              <label for>用户名:</label>
              <div>
                <input type="text" v-model="phone" placeholder="手机号" class="myinput" />
              </div>
            </div>
            <div>
              <label for>密&nbsp;&nbsp;&nbsp;码:</label>
              <div>
                <input type="password" v-model="upwd" placeholder="密码" class="myinput" />
              </div>
            </div>
            <div>
              <label for>验证码:</label>
              <div class="confirm">
                <input type="text" placeholder="请输入验证码" />
                <img src="../../assets/home/num.png" alt />
              </div>
            </div>
            <div class="btn">
              <button @click.prevent="login">登 录</button>
              <br/>
            </div>
            <div class="last">
              <div>
                <input type="checkbox" />&nbsp;&nbsp;自动登录
              </div>
              <span>
                <router-link to="/Reg">免费注册</router-link>
                <a href>忘记密码?</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="myCenter" v-show="!info">
      <div class="header">
        <div>
          <span>{{phone}}</span>
          <a href>设置</a>
        </div>
        <div>
          <img src="../../assets/user68.jpg" alt />
        </div>
      </div>
      <div class="myInfo">
        <ul>
          <li>
            <a href>
              <span>0</span>
              我的订单
            </a>
          </li>
          <li>
            <a href>
              <span>0</span>
              我的收藏
            </a>
          </li>
          <li>
            <a href>
              <span>0</span>
              我的评价
            </a>
          </li>
        </ul>
      </div>
      <div class="thirdPart">
        <ul>
          <li>
            <a href>
              <span>￥0元</span>
              余额
            </a>
          </li>
          <li>
            <a href>
              <span>0</span>
              优惠券
            </a>
          </li>
          <li>
            <a href @click.prevent="removeStorage">退出登录</a>
          </li>
        </ul>
      </div>
      <div class="fourthPart">
        <div>
          <a href>
            <em class="icon1"></em>
            <span>到货提醒</span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon2"></em>
            <span>
              <span>我的订单</span>
              <span>查看订单</span>
            </span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon3"></em>
            <span>我的预售</span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon4"></em>
            <span>
              <span>我的特价</span>
              <span></span>
            </span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon5"></em>
            <span>
              <span>我的收藏</span>
              <span></span>
            </span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon6"></em>
            <span>
              <span>我的余额</span>
              <span>查看我的余额</span>
            </span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon7"></em>
            <span>
              <span>我的账单</span>
              <span></span>
            </span>
          </a>
        </div>
        <div>
          <a href>
            <em class="icon8"></em>
            <span>
              <span>地址管理</span>
              <span></span>
            </span>
          </a>
        </div>
        <div>
          <a href>
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
                     <!-- 底部导航条  -->
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
  </div>
</template>
<script>
//引入导航条子组件
import TabBarIcon from "../common/TabBarIcon.vue"
// import store from "../../store"
export default {
  data() {
    return {
      phone: "",
      upwd: "",
      info:true,
      active:"me",
          currentIndex:[
          {isSelect:false},
          {isSelect:false},
          {isSelect:false},
          {isSelect:true}
        ]
    };
  },
  created() {
  
  },
  components:{//注册子组件，起标签名
      "tabbaricon":TabBarIcon
  },
  methods: {
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
       getStorage(){
            this.user=localStorage.getItem('user')
            if(!this.user){  // 如果缓存中没有此用户，路由导向 登陆页
             this.info=true
            // this.$router.push({path:'/Login'})
            }else{ 
             this.info=false
             this.phone=JSON.parse(this.user).user
             // 否则，界面显示 当前用户名称
            }
        },
        removeStorage(){
            this.$store.commit('_removeStorage','user') // 如果点击 退出，清除缓存 路由导向其他页面
            this.info=true
            this.phone=""
     
        },
    login() {
      //获取用户名和密码
      var ph = this.phone;
      var pw = this.upwd;
      //创建正则验证手机号
      var reg = /^1[3-9]\d{9}$/;
      //创建正则验证密码：字母数字下划线3~12位
      var reg1 = /^\w{3,12}$/i;
      //验证用户名，出错提示
      if (!reg.test(ph)) {
        this.$toast("用户名格式不正确");
        return;
      }
      //验证密码，出错提示
      if (!reg1.test(pw)) {
        this.$toast("密码格式不正确");
        return;
      }
      //5.发送ajax请求
      var url = "login";
      var obj = { phone: ph, upwd: pw };
      this.axios
        .get(url, {
          params: obj
        })
        .then(result => {
          if (result.data.code > 0) {
            //commit 方法提交给store数据 将数据提交给缓存进行设置
            this.$store.commit("_setStorage",{user:this.phone})
            // this.$router.push("/Center")
            this.$router.go(-1);//返回上一层
          } else {
            this.$messagebox("提示", "用户名或密码错误");
          }
        });
    }
  },
   created(){
        this.getStorage()
    }
}
</script>
<style scoped>
.login_container .header {
  width: 100%;
  height: 46px;
  background: #8fb13d;
}
.login_container .header > div:first-child {
  float: left;
  width: 15%;
  height: 100%;
}
.login_container .header > div:first-child > a {
  background: url("../../assets/home/arrow_left.png") no-repeat 15px center;
  background-size: auto 16px;
  display: block;
  width: 45px;
  height: 46px;
  margin: auto;
}
.login_container .header > div:last-child {
  float: left;
  width: 70%;
  font-size: 16px;
  color: #fff;
  text-align: center;
  height: 46px;
  line-height: 46px;
}
.login_container .middle {
  width: 100%;
  margin: auto;
}
.login {
  width: 90%;
  margin: auto;
  padding-top: 20px;
}
.login > div {
  width: 100%;
  margin-top: 15px;
  height: 48px;
}
.login > div > label {
  width: 25%;
  height: 48px;
  line-height: 48px;
  float: left;
  font-size: 14px;
  color: #666;
}
.login > div > div {
  width: 75%;
  float: left;
  height: 38px;
  padding: 5px 0;
}
input.myinput {
  height: 35px;
  padding: 0px;
  border: 1px solid #ddd;
  width: 95%;
  padding-left: 5px;
  font-size: 14px;
}
input {
  outline: none;
}
.login > div > div > input:not(:last-child) {
  height: 35px;
  padding: 0px;
  border: 1px solid #ddd;
  width: 95%;
  padding-left: 5px;
  font-size: 14px;
}
.login > div:nth-child(3) > div > input {
  width: 60%;
  float: left;
}
.login > div:nth-child(3) > div > img {
  width: 30%;
  float: right;
  height: 40px;
  vertical-align: middle;
}
.btn > button {
  width: 100%;
  height: 40px;
  background: #8fb13d;
  border: 0;
  border-radius: 4px;
  margin: 10px 0px;
  color: #fff;
  font-size: 16px;
}
.login > div:last-child > div {
  width: 35%;
  height: 40px;
  float: left;
  font-size: 14px;
  color: #999;
  text-align: left;
  line-height: 40px;
  padding: 0px;
}
.login > div:last-child > div > input {
  vertical-align: middle;
}
.last > span {
  width: 65%;
  height: 40px;
  line-height: 40px;
  float: right;
  text-align: right;
}
.last > span > a {
  text-decoration: none;
  color: #5790bb;
}
.last > span > a:first-child {
  font-size: 20px;
}
.last > span > a:last-child {
  font-size: 14px;
  margin: 0 10px;
}

/* 个人中心 */
.myCenter{
     overflow: auto;
}
.myCenter .header {
  width: 100%;
  height: 130px;
  background: url("../../assets/userbg.png") no-repeat center bottom;
  background-size: 100%;
}
.myCenter .header > div:first-child {
  width: 60%;
  float: right;
  overflow: hidden;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.myCenter .header > div:first-child > span {
  width: 65%;
  font-size: 15px;
  color: #fff;
}
.myCenter .header > div:first-child > a {
  width: 22%;
  margin-right: 5%;
  height: 30px;
  border: 1px solid #fff;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}
.myCenter .header > div:last-child {
  width: 100%;
}
.myCenter .header > div:last-child > img {
  margin: 65px 0px 0px -80px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.myCenter .myInfo {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
}
.myCenter .myInfo > ul {
  margin: 0;
  padding: 0;
  width: 70%;
  height: 40px;
  padding-top: 10px;
  float: right;
  list-style: none;
  display: flex;
}
.myCenter .myInfo > ul > li {
  width: 33%;
  height: 40px;
  border-right: 1px solid #eee;
}
.myCenter .myInfo > ul > li:last-child {
  border-right: 0;
}
.myCenter .myInfo > ul > li > a {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 20px;
  text-decoration: none;
  font-size: 12px;
  color: #000;
}
.myCenter .myInfo > ul > li > a > span {
  display: block;
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #666;
}
.myCenter .thirdPart {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
}
.myCenter .thirdPart > ul {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  float: right;
  list-style: none;
  display: flex;
}
.myCenter .thirdPart > ul > li {
  width: 33%;
  height: 40px;
  border-right: 1px solid #eee;
}
.myCenter .thirdPart > ul > li:last-child {
  border-right: 0;
}
.myCenter .thirdPart > ul > li > a {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 20px;
  text-decoration: none;
  font-size: 12px;
  color: #666;
}
.myCenter .thirdPart > ul > li > a > span {
  display: block;
  width: 100%;
  height: 20px;
  line-height: 20px;
}
.myCenter .thirdPart > ul > li:first-child > a > span,
.thirdPart > ul > li:nth-child(2) > a > span {
  color: red;
}
.myCenter .thirdPart > ul > li:last-child > a {
  line-height: 40px;
  font-size: 14px;
  color: #000;
}
.myCenter .fourthPart {
  width: 100%;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.myCenter .fourthPart > div {
  width: 100%;
  height: 45px;
}
.myCenter .fourthPart > div > a {
  width: 100%;
  height: 45px;
  text-decoration: none;
  float: left;
  line-height: 45px;
  margin-left: 10px;
  font-size: 16px;
  color: #666;
}
.myCenter .fourthPart > div > a > em {
  background: url("../../assets/user.png") no-repeat;
  background-size: auto 1700%;
  display: block;
  float: left;
  width: 35px;
  height: 35px;
  margin-top: 5px;
  position: absolute;
}
.myCenter .fourthPart > div > a > .icon1 {
  background-position: 0px -291px;
}
.myCenter .fourthPart > div > a > .icon2 {
  background-position: 0px -80px;
}
.myCenter .fourthPart > div > a > .icon3 {
  background-position: 0px -37.5px;
}
.myCenter .fourthPart > div > a > .icon4 {
  background-position: 0px -123px;
}
.myCenter .fourthPart > div > a > .icon5 {
  background-position: 0px 3px;
  background: url("../../assets/user1.png") no-repeat;
  background-size: auto 930%;
}
.myCenter .fourthPart > div > a > .icon7 {
  background-position: 0px -37.5px;
}
.myCenter .fourthPart > div > a > .icon8 {
  background-position: 0px -249.9px;
}
.myCenter .fourthPart > div > a > .icon9 {
  background-position: 0px -463px;
}
.myCenter .fourthPart > div > a > span {
  display: inline-block;
  width: 100%;
  margin-left: 35px;
  border-bottom: 1px solid #eee;
  text-align: start;
}
.myCenter .fourthPart > div > a > span > span:first-child {
  width: 50%;
  float: left;
}
.myCenter .fourthPart > div > a > span > span:last-child {
  height: 45px;
  line-height: 45px;
  width: 30%;
  margin-right: 10%;
  float: right;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  background: url("../../assets/arrow_right.png") no-repeat;
  background-size: auto 12px;
  background-position: 85% center;
  padding-right: 10px;
}
.myCenter .fourthPart > div:last-child > a > span {
  border-bottom: 1px solid #ddd;
}
.myCenter .footer {
  width: 100%;
  height: 40px;
  padding: 10px 0px;
  text-align: center;
  background: #f8f8f8;
}
p {
  margin: 0;
  color: #aaa;
}
.myCenter {
  margin-bottom: 45px;
  height: 100%;
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
