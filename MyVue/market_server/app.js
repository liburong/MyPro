//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
//2:配置第三方模块
 //2.1:配置连接池
 var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   database:"ty",
   connectionLimit:15
 })
 //2.2:跨域
 var server = express();
 server.use(cors({
   origin:["http://127.0.0.1:8081",
   "http://localhost:8081"],
   credentials:true
 }))
 //2.3:session
 server.use(session({
   secret:"128位字符串",
   resave:true,
   saveUninitialized:true
 }))
 //2.9:指定静态目录
 server.use(express.static("public"))

 server.listen(3000);

//3:完成第一个功能用户登录
server.get("/login",(req,res)=>{
  //1:参数
  var phone = req.query.phone;
  var upwd = req.query.upwd;
  //1.1:正则表达式验证用户名或密码
  //2:sql
var sql = "SELECT id FROM ";
sql +=" ty_login WHERE phone = ?";
sql +=" AND upwd = md5(?)";
  //3:json
  pool.query(sql,[phone,upwd],(err,result)=>{
      if(err)throw err;
    //  console.log(result);
      if(result.length==0){
         res.send({code:-1,msg:"用户名或密码有误"});
      }else{
//将当前登录用户uid保存session
//result=[{id:1}]
         req.session.uid = result[0].id;
         res.send({code:1,msg:"登录成功"});
      };
  });
});

//4.第二个功能完成首页轮播图、商品数据
server.get("/index",(req,res)=>{
   var sql="select pic from ty_banner1";
   pool.query(sql,(err,result)=>{
    if(err) throw err;
    var obj={banner1:result};
    var sql1="select pic,price,title from ty_banner2";
    pool.query(sql1,(err,result)=>{
      if(err) throw err;
      obj.banner2=result;
      var sql2="select pic,price,title from ty_sal";
      pool.query(sql2,(err,result)=>{
        if(err) throw err;
        obj.product=result;
        res.send(obj);
      //  console.log(obj);
      });
    });
   });
});

//5.完成第三个功能：商品列表分页显示
server.get("/list",(req,res)=>{
  //参数
  var pno=req.query.pno; //页码
  var ps=req.query.pageSize;//页大小
  ps=parseInt(ps)
  //设置默认值
  if(!pno){pno=1}
  if(!ps){ps=5}
  
  //创建第一条sql 当前页
  var obj={code:1,msg:"查询成功"};
  var sql="select pic,title,price,sal,pid from ty_list limit ?,?";
  //起始页
  var off=(pno-1)*ps;
  pool.query(sql,[off,ps],(err,result)=>{
    if(err) throw err;
    obj.data=result;
    var sql="select count(*) as c from ty_list";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      //总页数
     // console.log(result); [ RowDataPacket { c: 20 } ]
      var pc=result[0].c;
      obj.pc=pc;
      res.send(obj);
     // console.log(obj);
    });
  });
});

//购物车接口
//没有uid，必须先登录成功后，再查看购物车
//登录：http://127.0.0.1:3000/login?uname=tom&upwd=123
//查询购物车数据是否获取
//http://127.0.0.1:3000/cart
//查询指定用户购物车列表
server.get("/cart",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登陆"});
    return;
  }
  var sql="select id,img_url,title,subtitle,price,count from ty_cart where uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
});

//删除购物车商品
server.get("/delItem",(req,res)=>{
  //参数：商品id
  var id=req.query.id;
  var sql="delete from ty_cart where id=?"
  pool.query(sql,[id],(err,result)=>{
     if(err) throw err
   //  console.log(result);
     if(result.affectedRows>0){
       res.send({code:1,msg:"删除成功"});
     }else{
       res.send({code:-1,msg:"删除成功"});
     }
  })
})

//删除多个选中商品
server.get("/delAll",(req,res)=>{
  var ids=req.query.ids;
  var sql=`delete from ty_cart where id in (${ids})`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})

server.get("/details",(req,res)=>{
  var pid=req.query.pid;
  var sql="select id, pic from ty_banner where pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    var obj={banner:result};
    var sql="select id,title,price,detail,spec,count from ty_details where pid=?"
    pool.query(sql,[pid],(err,result)=>{
      if(err) throw err;
      obj.details=result;
      res.send(obj);
    })
  })
})