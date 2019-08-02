$(function(){
    var boo = true;
//向localhost:3000/reg发送请求，获得数据
  $(".regBtn").click(function(e){
      e.preventDefault();
      if(boo&&$("#checkboxInput").prop('checked')&&$(".verify").val().trim()!=""){
            var u = $(".login_uname").val();
            var p = $(".login_upwd").val();
           $.ajax({
               url:"http://localhost:3000/reg",
               type:"get",
               data:{uname:u,upwd:p}
            }).then(function(result){
               if(result.code==1){
                   alert("注册成功，请登录");
                   location.href="login.html"
               }else{
                   alert("注册失败");
               }
            })
        }
  })

    $(".regForm a").click(
        function(){
        $(".regForm a").removeClass("activeReg");
        $(this).addClass("activeReg");
    });

    $("input.login_uname").focus(function(){
        var $txt=$(this);
        $txt.attr("placeholder","");
        $txt.next().html("用户名为3到20位字母、数字或符号的组合");
    });
    $("input.login_upwd").focus(function(){
        var $txt=$(this);
        $txt.next().html("密码为6到20位字母、数字或符号的组合");
    });

    $("input.login_uname").blur(function(){
        var value=$(this).val().trim();
        var $span=$(this).next();
        if(value==""){
            $(this).attr("placeholder","邮箱/手机号/用户名");
            $span.html("");
            boo = false;
            // $(this).next().html("用户名不能为空").css("color","red");
        }else{
            vali(this,3,20,"用户名为3到20位字母、数字或符号的组合","用户名可以使用");
        }
    });
    $("input.login_upwd").blur(function(){
        var $span=$(this).next();
        var value=$(this).val().trim();
        if(value==""){
            $span.html("");
            boo = false;
            // $(this).next().html("密码不能为空").css("color","red");
        }else{
            vali(this,6,20,"密码为6到20位字母、数字或符号的组合","安全程度:");
        }
    });
    function vali(txt,minlenth,maxlenth,msg1,msg2){
        var $txt=$(txt);
        var $span=$txt.next();
        var value=$txt.val().trim();
      if(value.length>=minlenth&&value.length<=maxlenth){
        $span.html(msg2).css("color","#008842");
      }else{
        $span.html(msg1).css("color","red");
        boo = false;
      }
    }
   
    $("input.confirm_upwd").focus(function(){
        var $txt=$(this);
        var $span=$txt.next();
        $txt.next().html("请再次确认密码");
    });
    $("input.confirm_upwd").blur(function(){
        var $txt=$(this);
        var $span=$txt.next();
        var value=$txt.val().trim();
      if(value==""){
        // $span.html("");
        $span.html("请输入确认密码").css("color","red");
        boo=false;
       }else{
           if(value!=$("input.login_upwd").val().trim()){
             $span.html("密码不一致，请重新输入").css("color","red");
             boo=false;
           }else{
            $span.html("");
           }
       }
    });
})


  



    