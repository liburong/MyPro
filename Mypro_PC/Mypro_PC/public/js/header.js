$.ajax({
  url:"header.html",
  type:"get",
  success:function(result){
    $(result).replaceAll("header");
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
  }
})
$(function(){
  //  头部
  // 店铺
  $(".search").hover(
    function(){
    var $secLi=$(this).children(":nth-child(2)")
        // $(".store").hide().show()
        $secLi.hide().show()        
    },
   function(){
    $(".store").show().hide();
  });
  // 搜商品
  $("input:text").hover(
    function(){
        $(this).attr("placeholder","");
    },
    function(){
        $(this).attr("placeholder","搜商品");
   }
  );
  //我的账户
  $("#myCount").hover(
    function(){
    $(".countDrop").show()             
    },
   function(){
    $(".countDrop").hide(); 
  });

 })






 