$(function(){
    $(".login_uname").blur(function(){
        if($(".login_uname").val().trim()!=""){
            var n = $(this).val();
        $.ajax({
            url:"http://localhost:3000/username",
            type:"get",
            data:{uname:n}
        }).then((result)=>{
           if(result.code==-1){
            $(this).next().html("用户名不存在").css("color","#008842");
           }else{
            $(this).next().html("");
           }
        })
        }
    })

    $(".loginBtn").click(function(e){
        e.preventDefault();
        if($("input").val().trim()==""){
            $("input").next().html("本项必填").css("color","red");
        }else{
            $("input").next().html("");
            var n= $(".login_uname").val();
            var p = $(".login_upwd").val();
            $.ajax({
                url:"http://localhost:3000/login",
                type:"get",
                data:{uname:n,upwd:p}
             }).then(function(result){
                console.log(result);
                if(result.code==1){
                    alert("登录成功"); 
                    window.location.href="http://127.0.0.1:5500/Mypro_PC/public/index.html";
                }else {
                    alert("用户名或密码错误");

                  }
             })
        }
    })
})