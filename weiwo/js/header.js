$(function(){
  $.ajax({
    url:"header.html",  
    type:"get",
    success:function(result){
     $(result).replaceAll("header");
    //动态创建link元素，引入header.css,自动添加到<head>元素中
    $(`<link rel="stylesheet" href="../my_project/css/header.css">`).appendTo("head");
    }
  })
})