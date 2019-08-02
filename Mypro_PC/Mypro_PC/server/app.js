//使用express构建web服务器 
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
//2:配置第三方模块
 //2.1:配置连接池
 var pool = mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    database:"tc",
    connectionLimit: 15
  });
//2.2:跨域
var server = express();
server.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500"],
    credentials:true
}))

//使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
server.use(express.static("public"));
server.listen(3000);

//1.首页商品请求
server.get("/index",(req,res)=>{
    //商品选项请求
      var sql="SELECT * FROM tc_index_product";
      pool.query(sql,(err,result)=>{
        if(err) throw err;
        var obj={code:1,data:result};
        var sql2="SELECT * FROM tc_index_img";
         //楼层产品图片请求
        pool.query(sql2,(err,result)=>{
          if(err) throw err;
          obj.img=result;
         res.send(obj);
        }); 
      }); 
 })

//2.用户注册
server.get("/reg",(req,res)=>{
    var obj=req.query;
    if(!obj.uname){
        res.send("姓名不能为空");
        return;
      };
      if(!obj.upwd){
        res.send("密码不能为空")
        return;
      };
 //   alert(obj.uname);
//执行sql语句,往tc_user表里边插入数据
   var sql="insert into tc_user set ?";
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(123);
        //判断是否注册成功
	if(result.affectedRows>0){
        res.send({code:1,msg:"注册成功"});//1-->注册成功
       }else{
        res.send({code:-1,msg:"注册失败"});
       }
    })
})

//3.用户登录
server.get("/login",(req,res)=>{
   var obj=req.query;
   var sql="select * from tc_user where uname=? and upwd=?";
   pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
   // console.log(result);
    if(result.length>0){
        res.send({code:1,msg:"登录成功"});
      }else{
       res.send({code:-1,msg:"用户名或密码有误"});
      }
   })
})

//3.验证用户名
server.get("/username",(req,res)=>{
  var obj=req.query;
//  console.log(obj);
  var sql="select * from tc_user where uname=?";
  pool.query(sql,[obj.uname],(err,result)=>{
   if(err) throw err;
  // console.log(result);
   if(result.length>0){
       res.send({code:1});
     }else{
      res.send({code:-1,msg:"用户名不存在"});
     }
  })
})

