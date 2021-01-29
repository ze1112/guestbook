$(function(){
    $("#dl").click(()=>{
        if($("#userName").val()=="" && $("#pwd").val()==""){
            alert("请输入用户名或密码");
        }else{
            $.ajax({
                type:"POST",
                url:'PHP/dl.php?action=login',
                dataType:"json",
                data:{userName:$("#userName").val(),pwd:$("#pwd").val()},
                success:function(data){
                    if(data.result=="failed"){
                        alert("用户名或密码错误")
                    }else{
                        localStorage.setItem("jwt",data.jwt);
                        localStorage.setItem("userName",data.userName);
                        location.href="zy.html"
                    }
                }
            })
        }
    })
    $("#zc").click(()=>{
        location.href="zc.html";
    })
})