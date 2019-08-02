$(function(){
  var product = null;
 //向localhost:3000/index发送请求，获得数据
 $.ajax({
  url:"http://localhost:3000/index",
  type:"get",//请求类型
  //无请求参数
  dataType:"json"//返回值类型
}).then(function(result){//.then中的函数会在请求结束后，自动执行
  console.log(result);
  product=result.data;
  var html = "";
  for(var j=1;j<6;j++){
    html += '<ul class="imgLi ul'+j+'">';
    for(var i=0; i<product.length;i++){
      if(product[i].tid==j){
        html+='<li>'+
        '<div>'+
        '<a href="javascript:;">'+
        '<img src="'+product[i].pic+'" alt="">'+
        '</a>'+
        '</div>'+
        '<div>￥'+product[i].price.toFixed(2)+'</div>'+
        '<div>'+
        '<a href="javascript:;">'+product[i].title+'</a>'+
        '</div>'+
        '</li>';
      }
    };
    html+='</ul>';
  }
  $("#ulDiv").append(html);
  var img=result.img;
  console.log(img);
  var floor1 = '<div class="floorRight"><ul>',
  floor2 = '<div class="floorRight rightM"><ul>',
  floor3 = '<div class="floorRight rightM"><ul>',
  floor4 = '<div class="floorRight rightM"><ul>';
  for(var item of img){
    if(item.fid==1){
      floor1+='<li>'+
                '<a href="javascript:;">'+
                '<img src="'+item.pic+'" alt="">'+
                '<div class="mask"></div>'+
                '</a>'+
      '</li>';
    }
    if(item.fid==2){
      floor2+='<li>'+
                '<a href="javascript:;">'+
                '<img src="'+item.pic+'" alt="">'+
                '<div class="mask"></div>'+
                '</a>'+
      '</li>';
    }
    if(item.fid==3){
      floor3+='<li>'+
                '<a href="javascript:;">'+
                '<img src="'+item.pic+'" alt="">'+
                '<div class="mask"></div>'+
                '</a>'+
      '</li>';
    }
    if(item.fid==4){
      floor4+='<li>'+
                '<a href="javascript:;">'+
                '<img src="'+item.pic+'" alt="">'+
                '<div class="mask"></div>'+
                '</a>'+
      '</li>';
    }
  }
  floor1+='</ul></div>';
  floor2+='</ul></div>';
  floor3+='</ul></div>';
  floor4+='</ul></div>';
  $("#floorOne").append(floor1);
  $("#floorTwo").append(floor2);
  $("#floorThree").append(floor3);
  $("#floorFour").append(floor4);
})

//首页
//轮播图js
$("#bannerImg ul li").eq(0).show().siblings().hide();
$("#dot ul li").eq(0).addClass("hover");
var length=$("#bannerImg ul li").length;
var index=0;
var timer=setInterval(function(){
  index = (index==length-1)?0: index+1;
  $("#bannerImg ul li").eq(index).show().siblings().hide();
  $("#dot ul li").eq(index).addClass("hover").siblings().removeClass("hover");
},5000);
// 指示器
$("#dot ul li").mouseenter(function(){
    clearInterval(timer);
      $(this).addClass("hover").siblings().removeClass("hover");
      index = $(this).index();
      $("#bannerImg ul li").eq(index).show().siblings().hide();
  });
$("#dot ul li").mouseleave(function(){
  timer=setInterval(function(){
    index = (index==length-1)?0: index+1;
    $("#bannerImg ul li").eq(index).show().siblings().hide();
    $("#dot ul li").eq(index).addClass("hover").siblings().removeClass("hover");
  },5000);
});
//鼠标移入时清空定时器
$("#bannerImg").hover(
  function(){
   clearInterval(timer);
  },
  function(){
    timer=setInterval(function(){
      index = (index==length-1)?0: index+1;
      $("#bannerImg ul li").eq(index).show().siblings().hide();
      $("#dot ul li").eq(index).addClass("hover").siblings().removeClass("hover");
    },5000);
  }
)

 //首页主体第三部分：不同标题，显示不同图片
  $(".ul1").hide().show();
  $(".btn li").hover(
      function(){
        $(".btn li").removeClass("active");
        $(this).addClass("active");
      if($(this).hasClass("btn1")){
          $(".imgLi").hide();
          $(".ul1").show();
      }else if($(this).hasClass("btn2")){
          $(".imgLi").hide();
         $(".ul2").show();
      }else if($(this).hasClass("btn3")){
         $(".imgLi").hide();
         $(".ul3").show();
      }else if($(this).hasClass("btn4")){
        $(".imgLi").hide();
        $(".ul4").show();
      }else{
        $(".imgLi").hide();
        $(".ul5").show();
      }  
  });
  //第五部分:图片旋转切换
  $(".imgALL").hover(
    function(){
      $(this).children(":first-child")
             .show().hide();
      $(this).children(":last-child")
             .hide().show();
    },
    function(){
      $(this).children(":first-child")
             .hide().show();
      $(this).children(":last-child")
             .show().hide();
    }
  );
  $(".imgALL a:first-child").addClass("firstA");
  $(".imgALL a:last-child").addClass("secondA");
 
})